# Tag from package version

A simple Github action that creates a tag from the package.json version.

## Example usage

```yml
- name: Tag from package version
  uses: suceda/tag-from-version@v0.1.1
  id: tagName
```
```yml
- name: use tag
  run echo ${{ steps.tagName.outputs.tag }}
```