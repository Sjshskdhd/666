/**

 Copyright (C) 2022.

 Licensed under the  GPL-3.0 License;

 You may not use this file except in compliance with the License.

 It is supplied in the hope that it may be useful.

 * @project_name : Secktor-Md

 * @author : SamPandey001 <https://github.com/SamPandey001>

 * @description : Secktor,A Multi-functional whatsapp bot.

 * @version 0.0.6

 **/

const { tlang,cmd } = require('../lib')

const Config = require('../config')

const prefix = Config.prefix

const maker = require('mumaker')

    //---------------------------------------------------------------------------

cmd({ pattern: "deepsea", alias: ["لوجو1"], category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {

        if (!text) return citel.reply('_Need text._')

        let anu = await maker.textpro('https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html', text)

        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `⦿.*صنع بواسطه :-* ${tlang().title} 👨‍💻 ${tlang().greet}` }, { quoted: citel })

    })

    //---------------------------------------------------------------------------

cmd({ pattern: "horror", alias: ["لوجو2"], category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {

        if (!text) return citel.reply('_Need text._')

        let anu = await maker.textpro('https://textpro.me/horror-blood-text-effect-online-883.html', text)

        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `⦿.*صنع بواسطه :-* ${tlang().title} 👨‍💻 ${tlang().greet}` }, { quoted: citel })

    })

    //---------------------------------------------------------------------------

cmd({ pattern: "whitebear", alias: ["لوجو3"], category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {

        if (!text) return citel.reply('_Need text._')

        let anu = await maker.textpro('https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html', text)

        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `⦿.*صنع بواسطه :-* ${tlang().title} 👨‍💻 ${tlang().greet}` }, { quoted: citel })

    })

    //---------------------------------------------------------------------------

cmd({ pattern: "joker", alias: ["لوجو4"], category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {

        if (!text) return citel.reply('_Need text._')

        let anu = await maker.textpro('https://textpro.me/create-logo-joker-online-934.html', text)

        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `⦿.*صنع بواسطه :-* ${tlang().title} 👨‍💻 ${tlang().greet}` }, { quoted: citel })

    })

    //---------------------------------------------------------------------------

cmd({ pattern: "metallic", alias: ["لوجو5"], category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {

        if (!text) return citel.reply('_Need text._')

        let anu = await maker.textpro('https://textpro.me/create-a-metallic-text-effect-free-online-1041.html', text)

        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `⦿.*صنع بواسطه :-* ${tlang().title} 👨‍💻 ${tlang().greet}` }, { quoted: citel })

    })

    //---------------------------------------------------------------------------

cmd({ pattern: "steel", alias: ["لوجو6"], category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {

        if (!text) return citel.reply('_Need text._')

        let anu = await maker.textpro('https://textpro.me/steel-text-effect-online-921.html', text)

        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `⦿.*صنع بواسطه :-* ${tlang().title} 👨‍💻 ${tlang().greet}` }, { quoted: citel })

    })

    //---------------------------------------------------------------------------

cmd({ pattern: "harrypotter", alias: ["لوجو7"], category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {

        if (!text) return citel.reply('_Need text._')

        let anu = await maker.textpro('https://textpro.me/create-harry-potter-text-effect-online-1025.html', text)

        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `⦿.*صنع بواسطه :-* ${tlang().title} 👨‍💻 ${tlang().greet}` }, { quoted: citel })

    })

    //---------------------------------------------------------------------------

cmd({ pattern: "underwater", alias: ["لوجو8"], category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {

        if (!text) return citel.reply('_Need text._')

        let anu = await maker.textpro('https://textpro.me/3d-underwater-text-effect-generator-online-1013.html', text)

        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `⦿.*صنع بواسطه :-* ${tlang().title} 👨‍💻 ${tlang().greet}` }, { quoted: citel })

    })

    //---------------------------------------------------------------------------

cmd({ pattern: "luxury", alias: ["لوجو9"], category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {

        if (!text) return citel.reply('_Need text._')

        let anu = await maker.textpro('https://textpro.me/3d-luxury-gold-text-effect-online-1003.html', text)

        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `⦿.*صنع بواسطه :-* ${tlang().title} 👨‍💻 ${tlang().greet}` }, { quoted: citel })

    })

    //---------------------------------------------------------------------------

cmd({ pattern: "glue", alias: ["لوجو10"], category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {

        if (!text) return citel.reply('_Need text._')

        let anu = await maker.textpro('https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html', text)

        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `⦿.*صنع بواسطه :-* ${tlang().title} 👨‍💻 ${tlang().greet}` }, { quoted: citel })

    })

    //---------------------------------------------------------------------------

cmd({ pattern: "fabric", alias: ["لوجو11"], category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {

        if (!text) return citel.reply('_Need text._')

        let anu = await maker.textpro('https://textpro.me/fabric-text-effect-online-964.html', text)

        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `⦿.*صنع بواسطه :-* ${tlang().title} 👨‍💻 ${tlang().greet}` }, { quoted: citel })

    })

    //---------------------------------------------------------------------------

cmd({ pattern: "toxic", alias: ["لوجو12"], category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {

        if (!text) return citel.reply('_Need text._')

        let anu = await maker.textpro('https://textpro.me/toxic-text-effect-online-901.html', text)

        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `⦿.*صنع بواسطه :-* ${tlang().title} 👨‍💻 ${tlang().greet}` }, { quoted: citel })

    })

    //---------------------------------------------------------------------------

cmd({ pattern: "ancient", alias: ["لوجو13"], category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {

        if (!text) return citel.reply('_Need text._')

        let anu = await maker.textpro('https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html', text)

        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `⦿.*صنع بواسطه :-* ${tlang().title} 👨‍💻 ${tlang().greet}` }, { quoted: citel })

    })

    //---------------------------------------------------------------------------

cmd({

            pattern: "cloud",

            alias: ["لوجو14"],

            category: "textpro",

            desc: "Some text to image feature with various styles."

        },

        async(Void, citel, text) => {

            if (!text) return citel.reply('_Need text._')

            let anu = await maker.textpro('https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html', text)

            Void.sendMessage(citel.chat, {

                image: {

                    url: anu

                },

                caption: `⦿.*صنع بواسطه :-* ${tlang().title} 👨‍💻 ${tlang().greet}`

            }, {

                quoted: citel

            })

        }

    )

    //---------------------------------------------------------------------------

cmd({

            pattern: "transformer",

            alias: ["لوجو15"],

            category: "textpro",

            desc: "Some text to image feature with various styles."

        },

        async(Void, citel, text) => {

            if (!text) return citel.reply('_Need text._')

            let anu = await maker.textpro('https://textpro.me/create-a-transformer-text-effect-online-1035.html', text)

            Void.sendMessage(citel.chat, {

                image: {

                    url: anu

                },

                caption: `⦿.*صنع بواسطه :-* ${tlang().title} 👨‍💻 ${tlang().greet}`

            }, {

                quoted: citel

            })

        }

    )

    //---------------------------------------------------------------------------

cmd({

            pattern: "thunder",

            alias: ["لوجو16"],

            category: "textpro",

            desc: "Some text to image feature with various styles."

        },

        async(Void, citel, text) => {

            if (!text) return citel.reply('_Need text._')

            let anu = await maker.textpro('https://textpro.me/online-thunder-text-effect-generator-1031.html', text)

            Void.sendMessage(citel.chat, {

                image: {

                    url: anu

                },

                caption: `⦿.*صنع بواسطه :-* ${tlang().title} 👨‍💻 ${tlang().greet}`

            }, {

                quoted: citel

            })

        }

    )

    //---------------------------------------------------------------------------

cmd({

            pattern: "scifi",

            alias: ["لوجو17"],

            category: "textpro",

            desc: "Some text to image feature with various styles."

        },

        async(Void, citel, text) => {

            if (!text) return citel.reply('_Need text._')

            let anu = await maker.textpro('https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html', text)

            Void.sendMessage(citel.chat, {

                image: {

                    url: anu

                },

                caption: `⦿.*صنع بواسطه :-* ${tlang().title} 👨‍💻 ${tlang().greet}`

            }, {

                quoted: citel

            })

        }

    )

    //---------------------------------------------------------------------------

cmd({

            pattern: "sand",

            alias: ["لوجو18"],

            category: "textpro",

            desc: "Some text to image feature with various styles."

        },

        async(Void, citel, text) => {

            if (!text) return citel.reply('_Need text._')

            let anu = await maker.textpro('https://textpro.me/write-in-sand-summer-beach-free-online-991.html', text)

            Void.sendMessage(citel.chat, {

                image: {

                    url: anu

                },

                caption: `⦿.*صنع بواسطه :-* ${tlang().title} 👨‍💻 ${tlang().greet}`

            }, {

                quoted: citel

            })

        }

    )

    //---------------------------------------------------------------------------

cmd({

            pattern: "rainbow",

            alias: ["لوجو19"],

            category: "textpro",

            desc: "Some text to image feature with various styles."

        },

        async(Void, citel, text) => {

            if (!text) return citel.reply('_Need text._')

            let anu = await maker.textpro('https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html', text)

            Void.sendMessage(citel.chat, {

                image: {

                    url: anu

                },

                caption: `⦿.*صنع بواسطه :-* ${tlang().title} 👨‍💻 ${tlang().greet}`

            }, {

                quoted: citel

            })

        }

    )

    //---------------------------------------------------------------------------

cmd({

            pattern: "pencil",

            alias: ["لوجو20"],

            category: "textpro",

            desc: "Some text to image feature with various styles."

        },

        async(Void, citel, text) => {

            if (!text) return citel.reply('_Need text._')

            let anu = await maker.textpro('https://textpro.me/create-a-sketch-text-effect-online-1044.html', text)

            Void.sendMessage(citel.chat, {

                image: {

                    url: anu

                },

                caption: `⦿.*صنع بواسطه :-* ${tlang().title} 👨‍💻 ${tlang().greet}`

            }, {

                quoted: citel

            })

        }

    )

    //---------------------------------------------------------------------------

cmd({

            pattern: "neon",

            alias: ["لوجو21"],

            category: "textpro",

            desc: "Some text to image feature with various styles."

        },

        async(Void, citel, text) => {

            if (!text) return citel.reply('_Need text._')

            let anu = await maker.textpro('https://textpro.me/create-3d-neon-light-text-effect-online-1028.html', text)

            Void.sendMessage(citel.chat, {

                image: {

                    url: anu

                },

                caption: `⦿.*صنع بواسطه :-* ${tlang().title} 👨‍💻 ${tlang().greet}`

            }, {

                quoted: citel

            })

        }

    )

    //---------------------------------------------------------------------------

cmd({

            pattern: "magma",

            alias: ["لوجو22"],

            category: "textpro",

            desc: "Some text to image feature with various styles."

        },

        async(Void, citel, text) => {

            if (!text) return citel.reply('_Need text._')

            let anu = await maker.textpro('https://textpro.me/create-a-magma-hot-text-effect-online-1030.html', text)

            Void.sendMessage(citel.chat, {

                image: {

                    url: anu

                },

                caption: `⦿.*صنع بواسطه :-* ${tlang().title} 👨‍💻 ${tlang().greet}`

            }, {

                quoted: citel

            })

        }

    )

    //---------------------------------------------------------------------------

cmd({

            pattern: "leaves",

            alias: ["لوجو23"],

            category: "textpro",

            desc: "Some text to image feature with various styles."

        },

        async(Void, citel, text) => {

            if (!text) return citel.reply('_Need text._')

            let anu = await maker.textpro('https://textpro.me/natural-leaves-text-effect-931.html', text)

            Void.sendMessage(citel.chat, {

                image: {

                    url: anu

                },

                caption: `⦿.*صنع بواسطه :-* ${tlang().title} 👨‍💻 ${tlang().greet}`

            }, {

                quoted: citel

            })

        }

    )

    //---------------------------------------------------------------------------

cmd({

            pattern: "glitch",

            alias: ["لوجو24"],

            category: "textpro",

            desc: "Some text to image feature with various styles."

        },

        async(Void, citel, text) => {

            if (!text) return citel.reply('_Need text._')

            let anu = await maker.textpro('https://textpro.me/create-impressive-glitch-text-effects-online-1027.html', text)

            Void.sendMessage(citel.chat, {

                image: {

                    url: anu

                },

                caption: `⦿.*صنع بواسطه :-* ${tlang().title} 👨‍💻 ${tlang().greet}`

            }, {

                quoted: citel

            })

        }

    )

    //---------------------------------------------------------------------------

cmd({

            pattern: "discovery",

            alias: ["لوجو25"],

            category: "textpro",

            desc: "Some text to image feature with various styles."

        },

        async(Void, citel, text) => {

            if (!text) return citel.reply('_Need text._')

            let anu = await maker.textpro('https://textpro.me/create-space-text-effects-online-free-1042.html', text)

            Void.sendMessage(citel.chat, {

                image: {

                    url: anu

                },

                caption: `⦿.*صنع بواسطه :-* ${tlang().title} 👨‍💻 ${tlang().greet}`

            }, {

                quoted: citel

            })

        }

    )

    //---------------------------------------------------------------------------

cmd({

            pattern: "christmas",

            alias: ["لوجو26"],

            category: "textpro",

            desc: "Some text to image feature with various styles."

        },

        async(Void, citel, text) => {

            if (!text) return citel.reply('_Need text._')

            let anu = await maker.textpro('https://textpro.me/christmas-tree-text-effect-online-free-1057.html', text)

            Void.sendMessage(citel.chat, {

                image: {

                    url: anu

                },

                caption: `⦿.*صنع بواسطه :-* ${tlang().title} 👨‍💻 ${tlang().greet}`

            }, {

                quoted: citel

            })

        }

    )

    //---------------------------------------------------------------------------

cmd({

            pattern: "candy",

            alias: ["لوجو27"],

            category: "textpro",

            desc: "Some text to image feature with various styles."

        },

        async(Void, citel, text) => {

            if (!text) return citel.reply('_Need text._')

            let anu = await maker.textpro('https://textpro.me/create-christmas-candy-cane-text-effect-1056.html', text)

            Void.sendMessage(citel.chat, {

                image: {

                    url: anu

                },

                caption: `⦿.*صنع بواسطه :-* ${tlang().title} 👨‍💻 ${tlang().greet}`

            }, {

                quoted: citel

            })

        }

    )

    //---------------------------------------------------------------------------

cmd({

            pattern: "1917",

            alias: ["لوجو28"],

            category: "textpro",

            desc: "Some text to image feature with various styles."

        },

        async(Void, citel, text) => {

            if (!text) return citel.reply('_Need text._')

            let anu = await maker.textpro('https://textpro.me/1917-style-text-effect-online-980.html', text)

            Void.sendMessage(citel.chat, {

                image: {

                    url: anu

                },

                caption: `⦿.*صنع بواسطه :-* ${tlang().title} 👨‍💻 ${tlang().greet}`

            }, {

                quoted: citel

            })

        }

    )

    //---------------------------------------------------------------------------

cmd({

            pattern: "newtext",

            alias: ["لوجو30"],

            category: "textpro",

            desc: "Some text to image feature with various styles."

        },

        async(Void, citel, text) => {

            if (!text) return citel.reply('_Need text._')

            let anu = await maker.textpro('https://textpro.me/create-a-metallic-text-effect-free-online-1041.html', text)

            Void.sendMessage(citel.chat, {

                image: {

                    url: anu

                },

                caption: `⦿.*صنع بواسطه :-* ${tlang().title} 👨‍💻 ${tlang().greet}`

            }, {

                quoted: citel

            })

        }

    )

    //---------------------------------------------------------------------------

cmd({

        pattern: "blackpink",

        alias: ["لوجو29"],

        category: "textpro",

        desc: "Some text to image feature with various styles."

    },

    async(Void, citel, text) => {

        if (!text) return citel.reply('_Need text._')

        let anu = await maker.textpro('https://textpro.me/create-blackpink-logo-style-online-1001.html', text)

        Void.sendMessage(citel.chat, {

            image: {

                url: anu

            },

            caption: `⦿.*صنع بواسطه :-* ${tlang().title} 👨‍💻 ${tlang().greet}`

        }, {

            quoted: citel

        })

    }

)
