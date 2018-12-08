module.exports = (acyort) => {
  function d() {
    acyort.outputHTML({
      template: 'index',
      path: 'index.html',
      data: {
        raw: `# h1
this is h1
## h2
this is h2
# h11
this is h11
`,
      },
    })
  }

  acyort.workflow.register(d)
}
