import { work } from "../components/types/CustomType";

export const WORK:Array<work> = [
    {
        title: "Mochiken Portfolio",
        description: "当サイト",
        thumbnail: "public/work/MochikenPortfolio.png",
        url: "/",
        body: "当サイトです。<br />バックエンドであるDrupalからAPIを介してReactで取得・描画をしております。<br />早期公開を目指したためまずは最低限のレイアウトで公開しております。（2024/2/12現在）<br />制作期間：7日<br />使用技術：React, Typescript, ChakraUI, Drupal, GoogleAnalytics"
    },
    {
        title: "まつかわ自然農園",
        description: "（架空案件）農園をイメージしたLP",
        thumbnail: "public/work/MatsukawaLP.png",
        url: "https://shiny-syrniki-a6e70f.netlify.app/",
        body:"海や山、森に囲まれた緑豊かな大地で農園を営む会社さまをイメージしてランディングページを作成しました。<br />制作期間：3日<br />担当工程：デザイン、実装、テスト、リリース<br />使用技術：HTML, CSS, Sass, Javascript, jQuery, GitHub, Netlify, GoogleForm"
    },
    {
        title: "StayHub",
        description: "（架空案件）民泊施設を紹介するサービスのLP",
        thumbnail: "public/work/StayHubLP.png",
        url: "https://superlative-seahorse-3e91fd.netlify.app/",
        body: "世界各国の民泊を紹介するサービスのランディングページを作成しました。<br />制作期間：3日<br />担当工程：実装、テスト、リリース<br />使用技術：HTML, CSS, Sass, Javascript, GitHub, Netlify"
    }
];