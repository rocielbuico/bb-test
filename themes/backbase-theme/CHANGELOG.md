# Changelog
All notable changes to this project will be documented in this file.

This project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

More info: https://keepachangelog.com/en/1.0.0/

## [1.45.0]

### Added
* Horizontal Navigation styles (BAC-983)
* Add `bb-transactions-filter-ui` for background to transactions filter table form [TRANS-1944]

### Fixed
* ```bb-input-radio-ui``` - radio button center aligned due to label content height(DLRN-152)
* Fixing the '.main-content-btn-anchor' class by removing the width property.
* Sticky columns in the table for Safari (WM-1823)
* Hidden only radio input tag with using custom label template (DLRN-150)
* Fix text-dark to be neutral-9 (darker) instead of $neutral-8 (muted)

## [1.44.2]

### Fixed
* Sticky columns in table for Safari (WM-1823)
* Fix cursor for Transaction item head rows (WM-1548)

## [1.44.1]

### Fixed
* Fix icon @each iteration of bicon-sizing bug for `.bicons` (NOJIRA)
* Fix category icons @each iteration of bicon-category-* coloring `.bicons` (NOJIRA)

## [1.44.0]

### Added
* Two new exported chart colors (`chart-neutral-color` and `chart-alert-color`)
* Positioning of budget card control button
* Styles to show `bb-badge-ui` inside navigation-spa-widget if sidebar is collapsed
* Support for `div.bb-dropdown-btn-group-wrapper` element under `.btn-group` used in `bb-dropdown-menu-ui` component (BAC-2431)
* Wrapper class for `bb-curency-input-ui` to group labels and inputs (NOJIRA)

### Fixed
* Fixing budget-ng that was displays the category name one character at a time
* Transaction category icon background IE11 issue
* Add `bb-notification-foreground` class for notifications to be in front of a modal window (CME-94)
* `bb-badge-ui` paddings according to design
* Fix stylings for WC2 budgets/insights/transaction (BAC-2485)

## [1.43.0]

### Added
* Add support for `bb-icon-ui` to display category-${icon} via new bicon category classes (`.bicon-category-home`) (BAC-2432)

### Fixed
* Changed border-bottom from greyest to greyer (BAC-2466)
* Add media query to break-points for padding bottom spacing percentage.
* Included backtrack patches, with commits from 1.42.1

## [1.42.1]

### Fixed
* Included hotfixes from previous 1.41.7 Release

## [1.42.0]

### Added
* Include `bar-chart` material icon
* `bb-payment-card-state` class updated according to latest designs
* Introduce `.container-small` and `.container-medium` utility classes for layout-container convenience
* Update Bootstrap default `.container` class gutter paddings from `15px` to `16px` to match design system grids & layouts (see `$grid-gutter-width`)
* `bb-icon-ui` added ability for small (sm) icons when circle

### Fixed
* Fix `.bb-input-radio` styles for content inside label tag(BAC-2394)
* Fix font size of Sweep Item labels on Sweep summary page (CME-97)
* Fix `bb-switch-ui` file name and import it to the components.
* Fix `bb-search-box` clear button not showing properly in modals (BAC-2424)

## [1.41.[5,6,7]] -- patch range (5 to 7)

### Fixed -- backtrack patch, including commits from 1.42.0 (up to prelease 'cr.8')
* Fix `bb-switch-ui` file name and import it to the components.
* Fix `bb-search-box` clear button not showing properly in modals (BAC-2424)
* Fix `headings-widget` with removal of negative margins from `@extend .row` (BAC-2416)

## [1.41.4]
* Fix empty-state icon color
* Fix popover show opacity
* Fix more missing icons from FontAwesome
* Fix notification-stripe to match wc3 alert-variants
* Fix shadow to account-card, budget-card, transaction-item
* Fix headings-widget, content-widget background and padding
* Add missing background color for main-content on CX (next to side-navigation bar)

## [1.41.3]

### Fixed
* Fix imports for business widgets [WC2]
* Fix accounts-overview [WC2] --BAC-2386, BAC-2407
* Fix manage-payments [WC2] --BAC-2408
* Fix contact-manager [WC2] --BAC-2409
* Fix more missing font-awesome shims [WC2] --BAC-2111
* Fix profile-widget [WC2] --BAC-2405


## [1.41.2]

### Fixed
* Fix box-shadow for wc2 cards [WC2]
* Fix notification button misaligned display position [WC2] --BAC-2402
* Fix headings widget styling (background color) [WC2] --BAC-2401
* Fix favorite accounts missing colors [WC2] --BAC-2386
* Fix navigation quick actions (create-new) [WC2] -- BAC-2406
* Applied workaround fix for `.bicon-*` classes without default `.bicon` [WC2]
* Re-imported wc2 extension templates [WC2]

## [1.41.1]

### Added
* Added styles for progress tracker widget

## [1.41.0]

### Fixed
* Fix bug when long text overflows Sweep Rule buttons in IE (CME-65)
* Update page layout to have fixed height for mobile and desktop screens based on the design

## [1.40.1]

### Added
* Added styles for `.bb-table`

## [1.40.0]

### Added
* Added class `.header-label` for bolder labels, use it instead of `.font-weight-bold` to make labels customizable

### Fixed
* Fixed broken styles in ```bb-input-datepicker-ui```
* Update style for `bb-switch` for wc3
* Revert back design updates for `bb-switch` wc2

## [1.39.0]

### Added
* Added styles for `bb-stepper-ui`
* Added class for `bb-input-inline-edit-ui` for rounded buttons
* Added class `chart-bar` that defines minimum height for bar charts

### Fixed
* Use `.active` class instead of `.current` and `.checked` in `bb-stepper-ui`
* Fixed issue where datepicker showed circles around calendar dates on Firefox
* Modal: placement of close button fixed
* Fixed styles for long step's name in `bb-stepper-ui` component
* Update switcher design

## [1.38.1]
* Added styles for `bb-input-inline-edit-ui`

## [1.38.0]

### Added
* Added quickstart guidelines via inline comments in project-level variables.scss
* Added styles for `bb-map-ui`

### Fixed
* Highlight of invalid input component in case its input is grouped with button (has input-group wrapper)
* Added `bb-payment-card-component` styling and correct background classes

## [1.37.0]

### Added
* Added payment card svg images for dynamic background based on card name (TRANS-1718)

### Fixed
* Fixed background style for heading-widget via `.heading-wrapper`
* Added animation support for `.bicon` icons with `.animate` clase
* Fixed background style for heading-widget via `.heading-wrapper`
* Added margin-bottom in `bb-rich-text-editor-ui` between editable container and counter (DBSK-2936)
* Added `.bicon-file-xls`, `.bicon-file-csv`, `.bicon-file-blk`, `.bicon-file-mts`, `.bicon-bb-sepa` styles for file icons.

## [1.36.0]

### Added
* Added active state in `_bb-product-item-ui` styles for all product summary cards in ui-ang (PRSUM-4192)

### Fixed
* `ui-bb-list-ng` elements under `.modal` now use display: block (BAC-2126)

## [1.35.0]

### Added
* Added `bb-message-ui` styles
* Added `text-support` class with text's color #55585A

### Fixed
* Based on Usage, Ported font-awesome `.fa, .fas, .far` font classes to point towards bicons (material-icons)
* Fix variable `$light` to be correctly set as `$neutral-4`
* Updated list group border color

### Removed
* vendor/font-awesome fonts removed from theme

## [1.34.0]

### Added
* Added opt-in bgd color class .heading-area
* Added `bb-search-box-ui` classes for search and clear icon buttons
* (BAC-1759): Introduce `bb-list-multiple-select-ui` component
* (BAC-1759): Introduce `bb-checkbox-group-ui` component
* (BAC-1759): Add indeterminate state for `bb-input-checkbox` component
* Added `.table` and `.table-hover` styling
* Added `bb-paginator-ui` component styling

### Fixed
* Removed model-bank's mw-1140 class from heading-widget

## [1.33.0]

### Added

* Add initial sassdocrc.json configuration for SassDocs, a sass documentation tool
* Add sassdoc npm script command
* Add initial sassdoc poster blocks for (color, icons, typography)
* `bb-input-datepicker-ui` component class and classes for date range support. Component's redesign
- Add --chart-group-bar-color variable for group bar chart
- Add background for forecast group bar in turnovers charts
* Add `.icon-circle` (to be used in conjunction with `.bicon`) for circled, avatar-like icons
* `bg-lighter` background color

### Fixed
* Remap the transaction categories icon colors to the colors comming from the desing
* Miscellaneous backwards compatibility issues with WC2 widgets
* Fixed class `.text-dark` from not properly applying the right color
* Page Layout sidebar resizing issue on smaller screens
* Remove Tabs background color from Tabs Layout
* Modal dialog paddings (header/body/footer) updated to match designs
* Badge left and right padding updated to match design but still needs definition if fixed width is going to be used
* Single select dropdown top padding increased
* Checkbox component checked icon line height set to 1
* Reordered neutral colors from white to black
* Improve styles for sticky columns for Portfolio Summary Positions widget.
* Bigger row height variable for positions widget of PortfolioSummary
* Make all the cells of Positions table of PositionsWidget (Portfolio Summary) with fixed height (WM-1642)

## [1.32.4]

### Fixed

* Fix `.rb-sidebar` width from navigationLayout
* Fix `ui-bb-stepper-ng` stepper number for circular look
* Fix `uib-modal-ng` shims to have it properly display
* Fix misaligned coexistence of `@extend .bicon` and `<i class="fa">` resolutions from ui-ng
* Fix btn-outline-light colors for wc2
* Expose `switcher`, `uib-*` from `backbase-wc2` to main root

## [1.32.3]

### Fixed

* Highlighting of items on tabbing through the list [BAC-2034]

## [1.32.2]

### Fixed

* Enable chart styles for WC3 as well as WC2
* Highlighting of items on tabbing through the list [BAC-2034]

## [1.32.1]

### Fixed

* Fix set-locale-widget flag url paths

## [1.32.0]

### Added

* (BAC-2030): US, ES, FR, NL flags added.
* New `bb-input-radio-ui` component
* (BAC-1639): New README with API for typography, color, file-structure
* (BAC-1639): Added mixin `appearance-toggle()` -- to apply form-control `appearance: none`
* (BAC-1639): Set native BS4 `$enable-caret` to false for disabling `.dropdown-toggle`'s rendered caret
* (BAC-1639): Set native BS4 `$enable-shadows`; to false;
* (BAC-1639): Add future `.shadow` util classes (introduced in BS4.1) with multiple levels (`*-sm`, `*-md`, `*-lg`)
* (BAC-1639): Added pagination variables; Added datepicker variables
* (BAC-1639): Introduce `.font-weight-medium` utility class (extend bs4 equiv.)
* (BAC-1639): Introduce `base/set-defaults.scss` for nullifying Native BS4 pre-default'ed variables

### Fixed

* Fixed `.shadow` util class to use `$box-shadow-lg`
* Fixed product-item color left shadow to use 'selected' color
* (BAC-2023): Fixed `<a href></a>` to text-decorate with underline when hovered
* (BAC-2023): Fixed `font-size-base` syntax for unit `rem` (remove repeated unit in `$font-icon-*`)
* (BAC-2023): Fixed `.text-#{colors}` to use `$text-emphasis-palette`, which uses a darker secondary color
* (BAC-1639): Fixed budget capability donut styles (WC2)
* (BAC-1639): Set priority to resolve `font-awesome` when both `.bicon` and `.fa` are present
* (BAC-1639): Fixed budget capability donut styles (WC2)
* (BAC-1639): Set priority to resolve `font-awesome` when both `.bicon` and `.fa` are present
* Set button type "reset" to show no webkit appearence border
* `angular-cdk-drag-and-drop.scss` simple styling for Angular CDK drag and drop
* Fixed color for `bb-rich-text-editor-ui` component placeholder
* Make `bb-rich-text-editor-ui` outlined on focus

### Removed

* `ng2-dragula` styles. The according library is not used anymore

### Updated

* (BAC-1639): Updated BS4 `*-variants` mixins provisions of util classes: alerts-variants,
    btn-variants, bg-variants, dropdown, typography, badge-variants, icon sizing issue,
    payment-card, product-item
* (BAC-1639): Remapped native BS4 color helpers `$theme-colors`, `colors`
* (BAC-1639): Refactored color usage in select UI to use fn color()
* (BAC-1639): Updated main.scss entry point -- encapsulate WC2-specific styles
* (BAC-1639): Move `backbase/icons/icons` to `components/bb-icon-ui.scss`
* (BAC-1639): Moved `universal-3` from outer `vendor/*` into backbase layer (under `layouts`)
* (BAC-1639): Renamed `variables/bb-messages-ui` to `base/rich-text-editor`
* (BAC-1639): Updated default header font-weight, font-sizes
* (BAC-1639): Updated colors for the navigation sidebar

* Renamed `bb-message-ui` to `bb-rich-text-editor-ui`

## [1.31.1]

### Fixed

* Fixed active state and accessibility styling on Product Selector

## [1.31.0]

### Added

* Added styles for Product Item
* Enabled support for using box-shadows
* Updated default font-weight "bold" to 500
* Added styles for Product Item `bb-product-item-credit-card-ui`
* Added styles for Product Item `bb-product-item-savings-account-ui`
* Added styles for Product Item `bb-product-item-term-deposit-ui`
* Added styles for Product Item `bb-product-item-loan-ui`
* Added styles for Product Item `bb-product-item-investment-account-ui`
* Added styles for Product Item `bb-product-item-debit-card-ui`
* Added styles for Product Item `bb-product-item-current-account-ui`
* Added styles for Product Item `bb-product-item-basic-account-ui`
* Updated bb-icon-ui display to inline-flex from flex
* Added styles for Message component `bb-message-ui`

### Fixed

* Set opposite `border-radius` to 0 in `input-group-prepend` and `input-group-append` classes
* Removed media-breakpoint behaviors for `.rb-sidebar` that were collapses and truncates content in sidebar-web.soy
* Fixed width styling and `md` breakpoint behavior (compact mode) for newly introduced `.soy-template` class on page-layout `.rb-sidebar`, which originally causes overlaps on content area

## [1.30.2]

### Fixed

* Set `bb-badge-ui` component to flex
* Set `bb-button-ui` component to grow
* Set `bb-input-checkbox-ui` component to use $checkbox-outline for focus outline
* Set all buttons to show no webkit appearence border

## [1.30.1]

### Fixed

* Fix `statements` icon in bicon icon set

## [1.30.0]

### Added
* css variable for benchmark chart color
* override ngx-chart styles within `bb-portfolio-summary-charts' component
* ng-invalid with ng-touched parent sets child input and select borders to red

### Fixed

* For `bb-card-vendor-ui`, the VISA logo is changed to white because it is used
  on a dark background
* Hide default icon in IE for `bb-dropdown-single-select`
* Set outline on `bb-input-checkbox` focus to 2px.
* Default `bb-loading-indicator-path` dash array and offset for IE usage.
* Center `bb-icon-ui`
* For `bb-input-checkbox-ui`, allows resizing of checkbox based on parent component text size.
* Fix the height issue of `rb-sidebar` in ie11 and firefox
* Added missing icons to bicon map
    * accounts
    * transactions
    * credit-cards
    * debit-cards
    * quick-action
    * statements
    * unexpected

## [1.29.2]

### Fixed

* Removed border and icon color for `bb-dropdown-single-select` and `bb-dropdown-single-select-icon` classes

## [1.29.1]

### Added

* New vendor folder for universal WC3. 'backbase-universal-3'
* Add styles for layout flex container
* Add styles for navigation link tree widget
* Add styles for set locale widget.
* All the rules added for universal WC3 in:
  * vendor/backbase/layouts/\_navigation.scss
  * vendor/backbase/layouts/\_page.scss

### Removed

* Removed the only file related to a widget from universal WC3 as well as its reference.
  * vendor/backbase/templates/\_set-locale-widget.scss
  * vendor/backbase/templates/templates.scss

### Fixed

* Update background color of sidebar for `page-flex-layout`

## [1.29.0]

### Added

* Added `bb-loading-indicator` class
* Added `bb-dropdown-single-select` and `bb-dropdown-single-select-icon` classes
* Added `bb-input-checkbox` class
* Added `bicon-arrow-in` and `bicon-arrow-out` icons
* Added business banking categories definitions
* Expose spending/income categories colors
* Add `.pre-scrollable-typeahead` to manage scrollable typeahead dropdown menu

### Removed

* Added `bb-loading-indicator` class
* Added `bb-dropdown-single-select` and `bb-dropdown-single-select-icon` classes
* Added `bb-input-checkbox` class

### Fixed

* Created classes for icons and sizing of icons according to Backbase design system
* CSS variables with colors and for each transaction category (per category and combined)
* Donut chart container minimum height and increased size modifiers
* Add `.pre-scrollable-typeahead` to manage scrollable typeahead dropdown menu
* Added `bicon-arrow-in` and `bicon-arrow-out` icons
* Added business banking categories definitions
* Expose spending/income categories colors
* Expose spending/income categories icon content
* Expose chart's tooltip arrow size
* Badge styling fixed (uppercase transform)
* Overrided default hover color for `.heading-tabs`

## [1.28.0]

### Added

* Update README with basic usage of theme wc2 & wc3 stylings
* Separate wc2 & wc3 styling to allow for cleaner inclusion/exclusion inside `main.scss`
* Add lock icon and fallback for whitelabel
* Set of transaction category label classes `bb-transaction-category-label-{CATEGORY}`. Can be used to apply category's color to the element
* Material icons for `.bicon-user`, `.bicon-unexpected` and `.bicon-add-outline`
* Changes for Contact details modal
* `bb-logo-emblem` and `bb-logo-inverse` modifiers for the `bb-logo` class
* `bb-logo-responsive` modifier which makes it 100% width
* `bb-card-vendor` class with modifiers for mastercard, visa and visa-debit
* `bb-payment-card` class
* Font icon size xxl for biggest icons available
* Specific styles for `ext-bus-favorite-accounts-lite-ng` extension.
* Add scrolling for box layout `scrollable-box-content` and tab layout `scrollable-tab-content`
* Add styles for box layout to support fluid image content `fluid-image-box-layout`

### Fixed

* `nav-item` styles updated to match new designs
* Use backbase font size in input variables
* Replace error icon to use exclamation triangle instead of circle
* Override ngx-chart legend wrong width for turnovers, on safari browser
* Donut chart size is reduced. Chart's slice icons and values font size is increased
* Font icon size for xl has been reduced, there was too many gap between lg.

## [1.27.0]

### Added

* Added `npm run build` to transpile sass and minify output to css/ directory (for distribution of source and minified theme, together)
* Restructured theme file structure (removed /theme folder; un-nest /theme/styles as /scss at root level)
* Officially renamed package.json's project name to '@backbase/backbase-theme'
* Manual bump of package.json's project version (delegating 1.26.0 --> 1.27.0)
* Removed settings.gradle

## [1.25.2]

### Added

* override ngx-chart styles within `bb-turnovers-bar-chart` component

## [1.25.1]

### Added

* Material icons for `.bicon-loading` and `.bicon-ellipsis-h`

### Fixed

* Apply `navbar` link styles when parent is `.nav-item`
* Apply new styles for `nav-item` inactive, active and hover state

## [1.25.0]

### Changed

* `.bicon-download` icon content

### Fixed

* Remove vertical padding in account selector button

### Added

* `.button-toolbar` class to manage responsiveness on payment form buttons
* Selected dropdown item icon in dropdown list
* Added `.bicon-xl` icon class
* Added `.top-side-navigation-layout` namespace to add some styles only applicable within this namespace.

## [1.24.0]

### Added

* Added `.card-scrollable-x` class so account cards can be scrollable by horizontal
* Added `.ext-bus-favorite-accounts-ng` class for cards in ext-bus-favorite-accounts-ng and ext-bus-accounts-overview-ng
* Added `.button-toolbar` class to manage responsiveness on payment form buttons
* Selected dropdown item icon in dropdown list
* Added `.bicon-xl` icon class
* `.button-toolbar` class to manage responsiveness on payment form buttons
* Selected dropdown item icon in dropdown list
* Added `.bicon-autorenew` icon class

### Changed

* `.bicon-download` icon content
* Removed some specificity regarding navigation that added complexity to the system

### Fixed

* Remove vertical padding in account selector button
* Modified styling for switcher component

## [1.23.0]

### Added

* Added input-group customizations
* Added calendar popup component styles

## [1.22.0]

### Added

* Added `.bicon-lg` modifier class for large icons
* Added `.bicon-current-accounts`, `.bicon-savings-accounts`, `.bicon-term-deposits`, `.bicon-credit-cards`, `.bicon-debit-cards`, `.bicon-loans` and `.bicon-investment-accounts` icon classes for product kinds
* Added contextual classes for `ui-bb-account-card-ng` component (bb-account-card-primary, bb-account-card-success, ...)
* `.ext-bb-product-summary-overview-ng` styles are applied to `.ext-bb-product-summary-ng` as well

### Changed

* Removed styles from `.ext-bb-product-summary-overview-ng` that are applied directly to the account card component

## [1.21.0]

### Added

* Added `.page-heading-wrapped .heading-wrapper` class that allows adding some padding to the page heading content

## [1.20.2]

### Fixed

* Change active state to use .active instead of .focus for button group toggle

## [1.20.1]

### Fixed

* Budget card width

## Added

* Added `.bicon-download`, `.bicon-caret-up`, ,`bicon-caret-down` icon classes

## [1.15.0]

### Added

* Removed spacing class `.pb-100p` and `.pb-25p`
  (\_spacing.scss)
* Added loop to autogenerate class `.pb-5p` to `.pb-100p` with a step of 5
  (\_spacing.scss)
* Added `.bicon-edit` icon class

## [1.14.0]

### Added

* Added utility class .pb-25p to creating proportion for height to be 1/4 the width
* Added `.bicon-note-add`, `.bicon-edit`, `.bicon-print` and `.bicon-add-a-photo` icon classes

## [1.11.2]

### Added

* Added utility class .pb-100p for square layouts (\_spacing.scss)

## [1.9.1]

### Added

* CHANGELOG.md

### Changed

* Bumped version from 1.9.0 to 1.9.1 in package.json (model.xml auto-handled by jenkins)
* Updated under-the-hood whitelabel theme to latest 1.13.0
* Moved old variables to variables-legacy (imported within `vendor/backbase/helpers/helpers`)

### Fixed

* Improved custom theme load-order to correctly override vendor themes
