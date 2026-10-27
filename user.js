// Calm Dark — настройки профиля

// Разрешить userChrome.css / userContent.css
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Тёмная базовая тема и тёмные сайты по умолчанию
user_pref("extensions.activeThemeID", "firefox-compact-dark@mozilla.org");
user_pref("browser.theme.toolbar-theme", 0);
user_pref("browser.theme.content-theme", 0);
user_pref("layout.css.prefers-color-scheme.content-override", 0);

// Компактная плотность, вкладки сверху
user_pref("browser.compactmode.show", true);
user_pref("browser.uidensity", 1);
user_pref("sidebar.verticalTabs", false);
user_pref("sidebar.revamp", false);
user_pref("browser.tabs.inTitlebar", 1);
user_pref("browser.toolbars.bookmarks.visibility", "never");

// Чистая новая вкладка: только ярлыки
user_pref("browser.newtabpage.activity-stream.showSearch", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", true);
user_pref("browser.newtabpage.activity-stream.topSitesRows", 2);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.showWeather", false);
user_pref("browser.newtabpage.activity-stream.logowordmark.alwaysVisible", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);

user_pref("browser.tabs.hoverPreview.enabled", false);
