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
    html = html.replace(/__(.*?)__/, '<strong>$1</strong>')

    output.textContent = html

    preview.innerHTML = html

}

input?.addEventListener("input", () => convertMarkdown())
