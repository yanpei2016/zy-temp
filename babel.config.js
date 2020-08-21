module.exports = {
  
    <%_ if(UIfrag==='vant'){ _%>
    presets: [
        '@vue/cli-plugin-babel/preset'
      ],
    plugins: [
        [
            "import", 
            {
                "libraryName": "vant",
                "libraryDirectory": "es",
                "style": true
            }
        ]
    ]
    <%_ } _%>
    <%_ if(UIfrag==='antVue'){ _%>
    presets: [
        '@vue/cli-plugin-babel/preset'
      ],
    plugins: [
        [
            "import",
             { 
                "libraryName": "ant-design-vue", 
                "libraryDirectory": "es", 
                "style": "css" 
            }
        ] // `style: true` 会加载 less 文件
    ]
    <%_ } _%>
    <%_ if(UIfrag==='eleUI'){ _%>
    "presets": ['@vue/cli-plugin-babel/preset',["es2015", { "modules": false }]],
    "plugins": [
      [
        "component",
        {
          "libraryName": "element-ui",
          "styleLibraryName": "theme-chalk"
        }
      ]
    ]
    <%_ } _%>
  }