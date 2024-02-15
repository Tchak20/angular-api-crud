'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">cocktail documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AdminModule-8d880644bfbcd3b64d11d4290dcf5a0f180301a6a831741411d1ab5777cefb71857aecdec818e00e5af01fcb6f377e874fe235966839105a4dcf8518a5e6ff76"' : 'data-bs-target="#xs-components-links-module-AdminModule-8d880644bfbcd3b64d11d4290dcf5a0f180301a6a831741411d1ab5777cefb71857aecdec818e00e5af01fcb6f377e874fe235966839105a4dcf8518a5e6ff76"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-8d880644bfbcd3b64d11d4290dcf5a0f180301a6a831741411d1ab5777cefb71857aecdec818e00e5af01fcb6f377e874fe235966839105a4dcf8518a5e6ff76"' :
                                            'id="xs-components-links-module-AdminModule-8d880644bfbcd3b64d11d4290dcf5a0f180301a6a831741411d1ab5777cefb71857aecdec818e00e5af01fcb6f377e874fe235966839105a4dcf8518a5e6ff76"' }>
                                            <li class="link">
                                                <a href="components/AheaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AheaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AlayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AlayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidemenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidemenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminRoutingModule.html" data-type="entity-link" >AdminRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-25060f5f41327f1d92487feff8517e552a6cd8e8dfc0ade17761cebae1faf72c24567b49339f30977df3a90083e7b141f7f1571069844b9b11131db169b99abc"' : 'data-bs-target="#xs-components-links-module-AppModule-25060f5f41327f1d92487feff8517e552a6cd8e8dfc0ade17761cebae1faf72c24567b49339f30977df3a90083e7b141f7f1571069844b9b11131db169b99abc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-25060f5f41327f1d92487feff8517e552a6cd8e8dfc0ade17761cebae1faf72c24567b49339f30977df3a90083e7b141f7f1571069844b9b11131db169b99abc"' :
                                            'id="xs-components-links-module-AppModule-25060f5f41327f1d92487feff8517e552a6cd8e8dfc0ade17761cebae1faf72c24567b49339f30977df3a90083e7b141f7f1571069844b9b11131db169b99abc"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ErrorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErrorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AuthModule-e1b8d00d13ac32acdb404259b8480e449b7f961c6a78bf8bf4a70825dcd3073e8952571e2e3b424c0a6df688f8d0b73125e63707e1b49a6b8d79d15f756517c2"' : 'data-bs-target="#xs-components-links-module-AuthModule-e1b8d00d13ac32acdb404259b8480e449b7f961c6a78bf8bf4a70825dcd3073e8952571e2e3b424c0a6df688f8d0b73125e63707e1b49a6b8d79d15f756517c2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-e1b8d00d13ac32acdb404259b8480e449b7f961c6a78bf8bf4a70825dcd3073e8952571e2e3b424c0a6df688f8d0b73125e63707e1b49a6b8d79d15f756517c2"' :
                                            'id="xs-components-links-module-AuthModule-e1b8d00d13ac32acdb404259b8480e449b7f961c6a78bf8bf4a70825dcd3073e8952571e2e3b424c0a6df688f8d0b73125e63707e1b49a6b8d79d15f756517c2"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LogoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CocktailModule.html" data-type="entity-link" >CocktailModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CocktailModule-9a1ad36a83f1add71a9200908bb1103f2b57427a9af122e3507f2e81743ad23fa2a34534001700e79da62e96d505e1941de9e97a161093d66ddc95ada03df919"' : 'data-bs-target="#xs-components-links-module-CocktailModule-9a1ad36a83f1add71a9200908bb1103f2b57427a9af122e3507f2e81743ad23fa2a34534001700e79da62e96d505e1941de9e97a161093d66ddc95ada03df919"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CocktailModule-9a1ad36a83f1add71a9200908bb1103f2b57427a9af122e3507f2e81743ad23fa2a34534001700e79da62e96d505e1941de9e97a161093d66ddc95ada03df919"' :
                                            'id="xs-components-links-module-CocktailModule-9a1ad36a83f1add71a9200908bb1103f2b57427a9af122e3507f2e81743ad23fa2a34534001700e79da62e96d505e1941de9e97a161093d66ddc95ada03df919"' }>
                                            <li class="link">
                                                <a href="components/CAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CIndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CIndexComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CocktailRoutingModule.html" data-type="entity-link" >CocktailRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PublicModule.html" data-type="entity-link" >PublicModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-PublicModule-d3afed77d0d5bd2ef9f712d6a8ccf9b28d183c19d62602d8b4f2684eb4edcb6d2727d3df680f09bcc30ab4d9e2cce3cdda6b3991fbcee00918d36f2bb19fb4f6"' : 'data-bs-target="#xs-components-links-module-PublicModule-d3afed77d0d5bd2ef9f712d6a8ccf9b28d183c19d62602d8b4f2684eb4edcb6d2727d3df680f09bcc30ab4d9e2cce3cdda6b3991fbcee00918d36f2bb19fb4f6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PublicModule-d3afed77d0d5bd2ef9f712d6a8ccf9b28d183c19d62602d8b4f2684eb4edcb6d2727d3df680f09bcc30ab4d9e2cce3cdda6b3991fbcee00918d36f2bb19fb4f6"' :
                                            'id="xs-components-links-module-PublicModule-d3afed77d0d5bd2ef9f712d6a8ccf9b28d183c19d62602d8b4f2684eb4edcb6d2727d3df680f09bcc30ab4d9e2cce3cdda6b3991fbcee00918d36f2bb19fb4f6"' }>
                                            <li class="link">
                                                <a href="components/CocktailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CocktailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PheaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PheaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlayoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PublicRoutingModule.html" data-type="entity-link" >PublicRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-UserModule-ad2a7929ffea620f1997fd86ff702e89f9ac65d68f80743e9ecc1e13f438c4d71759db47b1746e1604da8df78e020441b3b0c321b2093c9209b18b8a5e0998d6"' : 'data-bs-target="#xs-components-links-module-UserModule-ad2a7929ffea620f1997fd86ff702e89f9ac65d68f80743e9ecc1e13f438c4d71759db47b1746e1604da8df78e020441b3b0c321b2093c9209b18b8a5e0998d6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-ad2a7929ffea620f1997fd86ff702e89f9ac65d68f80743e9ecc1e13f438c4d71759db47b1746e1604da8df78e020441b3b0c321b2093c9209b18b8a5e0998d6"' :
                                            'id="xs-components-links-module-UserModule-ad2a7929ffea620f1997fd86ff702e89f9ac65d68f80743e9ecc1e13f438c4d71759db47b1746e1604da8df78e020441b3b0c321b2093c9209b18b8a5e0998d6"' }>
                                            <li class="link">
                                                <a href="components/UAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UIndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UIndexComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserRoutingModule.html" data-type="entity-link" >UserRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});