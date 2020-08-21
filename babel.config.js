module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  <%_ if(UIfrag==='vant'){ _%>
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