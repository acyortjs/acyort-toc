module.exports = (acyort) => {
  function d() {
    acyort.util.outputHTML({
      template: 'index',
      path: 'index.html',
      data: {
        raw: `# h1 h2$h3
this is h1
## h2_h4#s
this is h2
# h1/h6
this is h11
`,
      },
    })
  }

  acyort.workflow.register(d)
}
