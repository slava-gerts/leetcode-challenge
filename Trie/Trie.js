export class Trie {
  constructor() {
    this.root = {}
  }

  insert(word) {
    let node = this.root
    for (let char of word) {
      if (!node[char]) node[char] = {}
      node = node[char]
    }
    node.isWord = true
  }

  traverse(word) {
    node = this.root
    for (let char of word) {
      node = node[char]
      if (!node) return null
    }
    return node
  }

  search(word) {
    const node = this.traverse(word)
    return node && node.isWord
  }

  startsWith(prefix) {
    return !!this.traverse(prefix)
  }
}

export function buildTrie() {
  const trie = new Trie();
  trie.insert("apple");
  trie.search("apple");   // return True
  trie.search("app");     // return False
  trie.startsWith("app"); // return True
  trie.insert("app");
  trie.search("app");     // return True
}
