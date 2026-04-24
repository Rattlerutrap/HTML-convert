const input = document.getElementById("markdown-input")
const output = document.getElementById("html-output")
const preview = document.getElementById("preview")

function convertMarkdown()
{
    let html = input?.value

    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>') // # dd
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>')
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>')

    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    html = html.replace(/__(.*?)__/g, '<strong>$1</strong>')

    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>')
    html = html.replace(/_(.*?)_/g, '<em>$1</em>')

    html = html.replace(/\!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2">')

    html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')

    html = html.replace(/^\s*> (.*)/gm, '<blockquote>$1</blockquote>')

    output.textContent = html

    preview.innerHTML = html

    return html
}

input?.addEventListener("input", () => convertMarkdown())
