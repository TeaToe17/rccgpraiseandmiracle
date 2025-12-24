import requests
import time
import re
import json
from pathlib import Path

OUTPUT_FILE = "hymns.json"

# Public-domain hymn books (Project Gutenberg)
SOURCES = [
    {
        "title": "The Hymnal 1940",
        "url": "https://www.gutenberg.org/files/12220/12220-0.txt",
    },
    {
        "title": "The Methodist Hymn-Book",
        "url": "https://www.gutenberg.org/files/54905/54905-0.txt",
    },
]

HEADERS = {
    "User-Agent": "PublicDomainHymnCollector/1.0"
}


def fetch_text(url, retries=5, timeout=30):
    for attempt in range(retries):
        try:
            print(f"Fetching {url} (attempt {attempt+1})")
            with requests.get(url, headers=HEADERS, timeout=timeout, stream=True) as r:
                r.raise_for_status()
                chunks = []
                for chunk in r.iter_content(chunk_size=8192):
                    if chunk:
                        chunks.append(chunk)
                return b"".join(chunks).decode("utf-8", errors="ignore")
        except Exception as e:
            print(f"⚠️ Error: {e}")
            time.sleep(3)
    raise RuntimeError(f"Failed to download {url}")


def extract_hymns(raw_text, source_name):
    hymns = []

    # Normalize line endings
    text = raw_text.replace("\r\n", "\n")

    # Split on hymn numbers (very common Gutenberg pattern)
    blocks = re.split(r"\n\s*\d+\.\s+", text)

    for block in blocks:
        lines = [l.strip() for l in block.split("\n") if l.strip()]
        if len(lines) < 4:
            continue

        title = lines[0][:120]
        lyrics = "\n".join(lines[1:])

        # Filter junk
        if "gutenberg" in lyrics.lower():
            continue

        hymns.append({
            "title": title,
            "lyrics": lyrics,
            "source": source_name,
            "public_domain": True
        })

    return hymns


def main():
    all_hymns = []

    for src in SOURCES:
        raw = fetch_text(src["url"])
        hymns = extract_hymns(raw, src["title"])
        print(f"✔ Extracted {len(hymns)} hymns from {src['title']}")
        all_hymns.extend(hymns)

    # Remove duplicates by title
    seen = set()
    unique = []
    for h in all_hymns:
        key = h["title"].lower()
        if key not in seen:
            seen.add(key)
            unique.append(h)

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(unique, f, indent=2, ensure_ascii=False)

    print(f"\n✅ Saved {len(unique)} public-domain hymns to {OUTPUT_FILE}")


if __name__ == "__main__":
    main()
