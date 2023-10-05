const modal = $.modal({
    title: 'Daria Modal',
    closable: true,
    content: `
    <p>Lorem ipsum dolor sit.</p>
    <p>Lorem ipsum dolor sit.</p>
    `,
    width: '400px',
    footerButtons: [
        {text: 'Ok', type: 'primary', handler() {
            console.log('Primery btn clicked')
        }},
        {text: 'Cancel', type: 'danger', handler() {
            console.log('Danger btn clicked')
        }}
    ]
})