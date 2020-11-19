# Changelog

All notable changes are being documented in this file.

Types of changes:

1. **Added** for new features.
1. **Changed** for changes in existing functionality.
1. **Deprecated** for soon-to-be removed features.
1. **Removed** for now removed features.
1. **Fixed** for any bug fixes.
1. **Security** in case of vulnerabilities.
1. **Breaking** for breaking changes
1. **Docs** for documentation changes
1. **Lab** components and features that are still in a work in progress

## Next
### Added
- `Themes | Business Dashboard` - added box-shadow theming [#6263](https://github.com/wix/wix-style-react/pull/6263)

## 9.41.0 - 2020-11-19
### Added
- `<Card/>` - add withShadow prop [#6257](https://github.com/wix/wix-style-react/pull/6257)
- `<Text />` - added tooltipProps as a new prop [#6261](https://github.com/wix/wix-style-react/pull/6261)
- `Themes | Business Dashboard` - add Input theme [#6265](https://github.com/wix/wix-style-react/pull/6265)
- `Themes | Business Dashboard` - add EmptyState theme [#6262](https://github.com/wix/wix-style-react/pull/6262)
- `Themes | Business Dashboard` - add Loader theme [#6277](https://github.com/wix/wix-style-react/pull/6277)

### Changed
- `<Modal/>` - migrate to stylable [#6266](https://github.com/wix/wix-style-react/pull/6266)
- `<Image/>` - Add className prop [#6272](https://github.com/wix/wix-style-react/pull/6272)

### Fixed
- `<GoogleAddressInput/>`- adding IDs to options recevied from client [#6258](https://github.com/wix/wix-style-react/pull/6258)
- `<TableListItem/>` - fix width/align not working [#6271](https://github.com/wix/wix-style-react/pull/6271)

## 9.40.0 - 2020-11-17
### Added 
- `Themes | Business Dashboard` - add ListItemSelect theme [#6235](https://github.com/wix/wix-style-react/pull/6235)
- `Themes | Business Dashboard` - add Tooltip theme [#6220](https://github.com/wix/wix-style-react/pull/6220)
- `Themes | Business Dashboard` - add Badge theme [#6259](https://github.com/wix/wix-style-react/pull/6259)
- `Themes | Business Dashboard` - add ListItemAction, ListItemSection and PopoverMenu theme [#6228](https://github.com/wix/wix-style-react/pull/6228)

### Changed
- `<Page/>` - migrate to Stylable [#6241](https://github.com/wix/wix-style-react/pull/6241)
- `<Caption/>` - (internal refactor) - use design tokens instead of Text component [#6250](https://github.com/wix/wix-style-react/pull/6250)
- `Themes | Business Dashboard` - change the CircularProgressBar success icon [#6251](https://github.com/wix/wix-style-react/pull/6251))

## 9.39.0 - 2020-11-16
### Added
- `<PageFooter/>` - new component [#6215](https://github.com/wix/wix-style-react/pull/6215)

### Fixed
- `<Input/>` - fix overflow (FF only) [#6245](https://github.com/wix/wix-style-react/pull/6245)
- `<Accordion/>` - remove unwanted color background color [#6248](https://github.com/wix/wix-style-react/pull/6248)

### Changed
- `<NumberInput/>` - add hideStepper property [#6233](https://github.com/wix/wix-style-react/pull/6233)
- `Themes | Business Dashboard` - adjust Text & Button styles [#6240](https://github.com/wix/wix-style-react/pull/6240)
- `<DropdownLayout/>` - convert selectable option to `<ListItemSelect/>` [#6163](https://github.com/wix/wix-style-react/pull/6163)


## 9.38.0 - 2020-11-11
### Added
- `<AutoCompleteWithLabel/>` - Added maxHeightPixel property [#6217](https://github.com/wix/wix-style-react/pull/6217)

### Fixed
- `<SparklineChart/>` - fix highlightedAreaEffect issue [#6219](https://github.com/wix/wix-style-react/pull/6219)
- `<TimeInput/>` - fix hover/focus styles [#6230](https://github.com/wix/wix-style-react/pull/6230)
- `<Search/>` - fix css for small size [#6236](https://github.com/wix/wix-style-react/pull/6236)

### Changed
- `<SidebarSectionItem/>` - limit suffix size to 30% to support madeFor font [#6146](https://github.com/wix/wix-style-react/pull/6146)

## 9.37.0 - 2020-11-10
### Added
- `<Carousel/>` - Added `controlsSize` prop [#6182](https://github.com/wix/wix-style-react/pull/6182)
- `Themes | Business Dashboard` - adjust Heading, Text & TextButton styles [#6188](https://github.com/wix/wix-style-react/pull/6188)
- `Themes | Business Dashboard` - Add Carousel theme [#6194](https://github.com/wix/wix-style-react/pull/6194)
- `<Text/>` - Added listStyle prop [#6165](https://github.com/wix/wix-style-react/pull/6165)

### Changed
- `<Popover/>` - Rearrange testkit docs [#6210](https://github.com/wix/wix-style-react/pull/6210)
- `<CardHeader/>` - remove redundant div [#6209](https://github.com/wix/wix-style-react/pull/6209)

### Fixed
- `<BadgeOption/>` and `badgeSelectItemBuilder`- builder fixes and adding selected, hovered and disabled styles to the `BadgeOption` itself [#6166](https://github.com/wix/wix-style-react/pull/6166)
- `Themes | Business Dashboard` - correlate FontUpgrade with the theme active state [#6206](https://github.com/wix/wix-style-react/pull/6206)
- infra - lower the specific yoshi-stylable-dependencies minor version to a public one [#6211](https://github.com/wix/wix-style-react/pull/6211)
- Themes | Business Dashboard - adjust Button theme [#6203](https://github.com/wix/wix-style-react/pull/6203)

## 9.36.0 - 2020-11-09
### Added
- `Themes | Business Dashboard` - theme the `IconButton` component [#6187](https://github.com/wix/wix-style-react/pull/6187)

### Changed
- `<DropdownLayout/>`-  align driver and uni driver [#6184](https://github.com/wix/wix-style-react/pull/6184)

## 9.35.0 - 2020-11-08
### Added
- `<CircularProgressBar/>` - support custom label label + add Business Dashboard theme [#6192](https://github.com/wix/wix-style-react/pull/6192)

### Fixed
- `<DatePicker/>` - add the public methods to the index.d.ts file [#6189](https://github.com/wix/wix-style-react/pull/6189)
- `<CustomModalLayout/>` - fix top and bottom dividers [#6149](https://github.com/wix/wix-style-react/pull/6149)
- `<RichTextInputArea/>` and `<VariableInput/>` - prevent entering a text into rich text inputs from clearing the previous value [#6168](https://github.com/wix/wix-style-react/pull/6168)
- `<BadgeOption/>` and `badgeSelectItemBuilder`- adding visuals and fix types [#6196](https://github.com/wix/wix-style-react/pull/6196)

## 9.34.0 - 2020-11-06

### Added
- `<SparklineChart/>` - add onHover prop [#6178](https://github.com/wix/wix-style-react/pull/6178)
- `<TimeInput/>` - added showSeconds prop [#6186](https://github.com/wix/wix-style-react/pull/6186)

### Changed
- `<TimeInput/>` - replace css with stylable [#6177](https://github.com/wix/wix-style-react/pull/6177)
- `<ModalSelectorLayout/>` - implement using the new `<SelectorList/>` [#6171](https://github.com/wix/wix-style-react/pull/6171)

### Fixed
- `<SelectableAccordion/>` - Fix testkit types [#6181](https://github.com/wix/wix-style-react/pull/6181)
- `Themes | Business Dashboard` - fix CircularProgressBar styling [#6179](https://github.com/wix/wix-style-react/pull/6179)
- `<Search/>` - fix `onBlur` behaviour [#6169](https://github.com/wix/wix-style-react/pull/6169)

## 9.33.0 - 2020-11-04
### Added
- `<SelectorList/>` - new component [#6098](https://github.com/wix/wix-style-react/pull/6098)
- `<Carousel/>` - Add controlsPosition prop [#6164](https://github.com/wix/wix-style-react/pull/6164)
- `<Search/>` - Add highlight prop [#6174](https://github.com/wix/wix-style-react/pull/6174)
- `Themes | Business Dashboard` - Add theme for `LinearProgressBar` [#6136](https://github.com/wix/wix-style-react/pull/6136)
- `<Range/>` - add unidriver [#6170](https://github.com/wix/wix-style-react/pull/6170)

### Changed
- `Themes | Business Dashboard` - improve `Text` & `TextButton` [#6173](https://github.com/wix/wix-style-react/pull/6173)

### Deprecated
- Deprecated `<MessageBoxFunctionalLayout/>` and `<ModalSelectorLayout/>` modal layouts [#6150](https://github.com/wix/wix-style-react/pull/6150)

## 9.32.0 - 2020-11-02
### Added
- `Themes | Business Dashboard` - theme `Heading`, `Text` & `TextButton` [#6157](https://github.com/wix/wix-style-react/pull/6157)

### Changed
- `<DropdownLayout/>` and list builders-  adding `overrideOptionStyle` prop [#6151](https://github.com/wix/wix-style-react/pull/6151)

### Fixed
- `<ListItemSection/>` - Removed redundant margin [#6156](https://github.com/wix/wix-style-react/pull/6156)

### Docs
- `<TimeInput/>` - refactor story page [#6158](https://github.com/wix/wix-style-react/pull/6158)

## 9.31.0 - 2020-11-01
### Added
- `<CardFolderTabs/>` - new component [#6037](https://github.com/wix/wix-style-react/pull/6037)
- `<DatePicker/>` - RTL support [#6129](https://github.com/wix/wix-style-react/pull/6129)
- `<SectionHelper/>` - Added text button example to a story [#6153](https://github.com/wix/wix-style-react/pull/6153)

### Fixed
- `<Text/>` - add skin primary to definitions [#6155](https://github.com/wix/wix-style-react/pull/6155)
- `<ImageViewer/>` - Fix typo in docs [#6154](https://github.com/wix/wix-style-react/pull/6154/files)


## 9.30.0 - 2020-10-29
### Added
- `<AddressInput/>` – [Internal] New component [#6049](https://github.com/wix/wix-style-react/pull/6049)
- `<Layout/>` - Add rowHeight prop [#6135](https://github.com/wix/wix-style-react/pull/6135)

### Changed
- `Themes | Business Dashboard` - update theme color foundations [#6147](https://github.com/wix/wix-style-react/pull/6147)
- `<Dropdown/>` - use pointer type of cursor when mouse hovering over dropdown [#6138](https://github.com/wix/wix-style-react/pull/6138)
- `<VerticalTabs/>` - refactor story page [#6148](https://github.com/wix/wix-style-react/pull/6148)
- `<CustomModalLayout/>` - remove 3px content padding [#6132](https://github.com/wix/wix-style-react/pull/6132)

## 9.29.3 - 2020-10-28
### Fixed
- Themes - publish entry files [#6144](https://github.com/wix/wix-style-react/pull/6144)

## 9.29.2 - 2020-10-27
### Fixed
- `<CounterBadge/>` - fix medium counter badge content [#6134](https://github.com/wix/wix-style-react/pull/6134)
- `<Modal/>` - [Testkit] fix initialization when element is not found [#6137](https://github.com/wix/wix-style-react/pull/6137)

## 9.29.1 - 2020-10-26
### Changed
- `<DropdownLayout/>` and `<ListItemSelect/>`- revert PR [#6088](https://github.com/wix/wix-style-react/pull/6088).


## 9.29.0 - 2020-10-25
### Changed
- `<DropdownLayout/>` and `<ListItemSelect/>`- using builders for selectable option [#6088](https://github.com/wix/wix-style-react/pull/6088).

## 9.28.0 - 2020-10-25
### Changed
- `<Timeline/>` - use full width for content when no suffix [#6112](https://github.com/wix/wix-style-react/pull/6112)

### Fixed
- `<Tag/>` - fix hover color [#6114](https://github.com/wix/wix-style-react/pull/6114)
- `<Modal/>` - fix testkit when there's more than one modal [#6102](https://github.com/wix/wix-style-react/pull/6102)
- `badgeSelectItemBuilder` - fix style [#6121](https://github.com/wix/wix-style-react/pull/6121)
- `<Input/>`- adding missing comma Input.st.css [#6126](https://github.com/wix/wix-style-react/pull/6126)

## 9.27.0 - 2020-10-21
### Added
- `<AddItem/>` - add ariaLabel and ariaLabelledBy props for a11y [#6108](https://github.com/wix/wix-style-react/pull/6108)

### Changed
- `<FontUpgrade/>` - migrate to Stylable [#6095](https://github.com/wix/wix-style-react/pull/6095)

### Docs
- `badgeSelectBuilder`- adding the new props to the docs and improving subtitle example. [#6117](https://github.com/wix/wix-style-react/pull/6117)

## 9.26.0 - 2020-10-20
### Changed
- `<SectionHelper/>` - fix padding when no close button shown [#6097](https://github.com/wix/wix-style-react/pull/6097)
- `Charts utils` - remove Intl [#6113](https://github.com/wix/wix-style-react/pull/6113)

### Fixed
- `<ListItemSelect/>`- Fix Selected & highlighted styles [#6106](https://github.com/wix/wix-style-react/pull/6106)
- `<VariableInput/>` - implement `enterText ` UniDriver method for puppeteer [#6041](https://github.com/wix/wix-style-react/pull/6041)
- `<Input/>` - fix unidriver trigger change method [#6111](https://github.com/wix/wix-style-react/pull/6111)
- `<Input/>` - fix testkit `enterValue` method for uncontrolled inputs [#6101](https://github.com/wix/wix-style-react/pull/6101)
- `badgeSelectBuilder` and `listItemSelectBuilder` - fix builders [#6109](https://github.com/wix/wix-style-react/pull/6109)

## 9.25.0 - 2020-10-19
### Changed
- Update react to 16.13.1

## 9.24.0 - 2020-10-18
### Added
- Theming - create a "Business Dashboard" theme [#6082](https://github.com/wix/wix-style-react/pull/6082)
- `<AddItem/>` - Support customising icons with theming mechanism [#6079](https://github.com/wix/wix-style-react/pull/6079)

## 9.23.0 - 2020-10-15
### Fixed
- `<Animate/>`- fix animation execition [#6094](https://github.com/wix/wix-style-react/pull/6094)

### Added
- `<BadgeSelect/>` - add ellipsis to item builder [#6093](https://github.com/wix/wix-style-react/pull/6093)

## 9.22.0 - 2020-10-13
### Added
- `<Tabs/>` - added size small [#6083](https://github.com/wix/wix-style-react/pull/6083)

### Fixed
- `<StatisticsWidget/>` - add margin left to description info icon [#6087](https://github.com/wix/wix-style-react/pull/6087)
- `<Input/>` - fix unclickable area near arrow [#6086](https://github.com/wix/wix-style-react/pull/6086)
- `<Ellipsis/>` - fix endless render loop [#6085](https://github.com/wix/wix-style-react/pull/6085)

## 9.21.0 - 2020-10-13
### Fixed
- `<Table/>` - filter selected items when items are deleted [#6077](https://github.com/wix/wix-style-react/pull/6077)

### Changed
- `<DropdownLayout/>`- changed the visual design of title and divider [#6065](https://github.com/wix/wix-style-react/pull/6065)

### Added
- Cheatsheet- adding unit tests [#6066](https://github.com/wix/wix-style-react/pull/6066)
- `<StackedBarChart/>` - Add more custom props [#6075](https://github.com/wix/wix-style-react/pull/6075)
- `<StackedBarChart/>` - Y axis format [#6080](https://github.com/wix/wix-style-react/pull/6080)

### Docs
- `<Cheatsheet/>`- adding `Sparkline Chart`, `Selectable Accordion` and `StackedBarChart` examples [#6068](https://github.com/wix/wix-style-react/pull/6068)

## 9.20.0 - 2020-10-11
### Potential Breaking
- `<Page/>` - Change container to be flex [#6064](https://github.com/wix/wix-style-react/pull/6064)

## 9.19.1 - 2020-10-11
### Fixed
- `<AddItem/>` - Add a className for the Text and use it [#6067](https://github.com/wix/wix-style-react/pull/6067)
- `<ListItemAction/>` - Remove margin from root class [#6072](https://github.com/wix/wix-style-react/pull/6072)
-  `<BadgeSelect/>` - Add subtitle to BadgeSelectOptionType [#6074](https://github.com/wix/wix-style-react/pull/6074)

## 9.19.0 - 2020-10-11
### Added
- `<SparklineChart/>` - new component [#6000](https://github.com/wix/wix-style-react/pull/6000)
- `<StackedBarChart/>` - new component [#5902](https://github.com/wix/wix-style-react/pull/5902)
- `<BadgeSelect/>` - Added subtitle [#6057](https://github.com/wix/wix-style-react/pull/6057)

## 9.18.1 - 2020-10-08
### Fixed
- `<Dropzone/>` - Fix get file event handler [#6061](https://github.com/wix/wix-style-react/pull/6061)
- `<Page/>` - fix image blurry edges [#6063](https://github.com/wix/wix-style-react/pull/6063)

## 9.18.0 - 2020-10-07
### Added
- `<SelectableAccordion/>`- new component [#5987](https://github.com/wix/wix-style-react/pull/5987)

### Fixed
- `<Grid/>` - AutoAdjustedColumns - Ignore falsy children [#6053](https://github.com/wix/wix-style-react/pull/6053)
- `listItemEditableBuilder`- fixed types [#6055](https://github.com/wix/wix-style-react/pull/6055)
- `<Ellipsis/>` - tooltip value is not updated when changing the text content [#6024](https://github.com/wix/wix-style-react/pull/6024)

### Docs
- `<GoogleAddressInput/>` - change docs to sections [#6052](https://github.com/wix/wix-style-react/pull/6052)

## 9.17.0 - 2020-10-01
### Docs
- Improving FAQ and Troubleshooting docs [#5890](https://github.com/wix/wix-style-react/pull/5890)

### Changed
- `<DropdownLayout/>`- new story page, minor driver changes and deprecate `itemHeight` prop. [#5999](https://github.com/wix/wix-style-react/pull/5999)


## 9.16.0 - 2020-09-30
### Added
- Themes - create an EditorX theme [#6038](https://github.com/wix/wix-style-react/pull/6038)
- `<CounterBadge/>` - add size prop [#6031](https://github.com/wix/wix-style-react/pull/6031)

### Changed
- `<FunnelChart/>` - Change Tooltip function to expose index [#6021](https://github.com/wix/wix-style-react/pull/6021)
- `<DatePicker/>` - remove the interactive example from docs and generator [#6042](https://github.com/wix/wix-style-react/pull/6042)

### Fixed
- `<Table/>` - fix page sticky top calculation when there's no header [#6027](https://github.com/wix/wix-style-react/pull/6027)

## 9.15.0 - 2020-09-29
### Added
- `<VariableInput/>` - add readOnly prop [#6005](https://github.com/wix/wix-style-react/pull/6005)

### Changed
- Infra: replace `createReactContext` polyfill with the native one [#6034](https://github.com/wix/wix-style-react/pull/6034)
- Infra: create a separate entry file per theme [#6035](https://github.com/wix/wix-style-react/pull/6035)


### Docs
- `Icons` - use wix-ui-icons-common icon list in storybook [#6017](https://github.com/wix/wix-style-react/pull/6017)
- `<CustomModalLayout/>` - add dropdown example for storybook [#6026](https://github.com/wix/wix-style-react/pull/6026)

## 9.14.0 - 2020-09-23
### Added
- `<AreaChart/>` - new component [#5901](https://github.com/wix/wix-style-react/pull/5901)
- `<TableActionCell/>` - Add size prop [#5911](https://github.com/wix/wix-style-react/pull/5911)
- `<CounterBadge/>` Add `light` skin [#6003](https://github.com/wix/wix-style-react/pull/6003)

### Fixed
- `<Input/>` - fix incorrect status values from displaying an indicator [#6018](https://github.com/wix/wix-style-react/pull/6018)
- `<StatisticsWidget/>` - fixed description datahook [#6014](https://github.com/wix/wix-style-react/pull/6014)

### Deprecated
- `contactItemBuilder` && `<ContactItem/>`- deprecating component and builder [#6022](https://github.com/wix/wix-style-react/pull/6022)

## 9.13.0 - 2020-09-21
### Added
- Performance: add a "FailWhale" to indicate when bundling without tree-shaking [#6007](https://github.com/wix/wix-style-react/pull/6007)

### Fixed
- `<RadioGroup/>` - added RadioButtonDriver types to getRadioAtIndex driver method [#5981](https://github.com/wix/wix-style-react/pull/5981)
- `<CounterBadge/>` - align inner text [#6006](https://github.com/wix/wix-style-react/pull/6006)

## 9.12.0 - 2020-09-17
### Added
- `<Button/>` - add ellipsis prop [#5914](https://github.com/wix/wix-style-react/pull/5914)
- `<TextButton/>` - add ellipsis prop [#5945](https://github.com/wix/wix-style-react/pull/5945)
- `<MultiSelectCheckbox /> `- add option for controlled value [#5973](https://github.com/wix/wix-style-react/pull/5973)
- `<CustomModalLayout/>` - Adding support for `showFooterDivider` [#5983](https://github.com/wix/wix-style-react/pull/5983)
- `<ListItemAction/>` - add subtitle property [#5960](https://github.com/wix/wix-style-react/pull/5960)
- `<TableActionCell/>`- adding unidriver [#5963](https://github.com/wix/wix-style-react/pull/5963)

### Fixed
- `<TableActionCell/>` - Fix menu items get cut [#5992](https://github.com/wix/wix-style-react/pull/5992)
- `<Text/>` - add `primary` to `TextSkin` prop type [#5990](https://github.com/wix/wix-style-react/pull/5990)
- `<Timeline/>` - ordered list [#5989](https://github.com/wix/wix-style-react/pull/5989)
- `<Button/>` - inverted-skin color fix [#5991](https://github.com/wix/wix-style-react/pull/5991)

### Docs
- `<Collapse/>` - refactor story page [#5984](https://github.com/wix/wix-style-react/pull/5984)
- `<ColorPicker/>` - refactor story page [#5965](https://github.com/wix/wix-style-react/pull/5965)
- `<EmptyState/>` - refactor story page [#5979](https://github.com/wix/wix-style-react/pull/5979)

## 9.11.0 - 2020-09-16
### Breaking:
- `<ModalSelectorLayout/>` - use new `<CustomModalLayout/>` [#5831](https://github.com/wix/wix-style-react/pull/5831)

## 9.10.0 - 2020-09-16
### Fixed:
- `<Slider/>` - fix tooltip typography [#5974](https://github.com/wix/wix-style-react/pull/5974)

### Added:
- `<FunnelChart/>` - create new component [#5904](https://github.com/wix/wix-style-react/pull/5904)
- `<Ellipsis/>`- adding `maxLines` prop [#5885](https://github.com/wix/wix-style-react/pull/5885)

### Changed:
- `<PageHeader/>`- subtitle was changed to be max of two lines (with ellipsis) [#5964](https://github.com/wix/wix-style-react/pull/5964)
- `<BaseModalLayout/>` - Fix button content type [#5966](https://github.com/wix/wix-style-react/pull/5966)

### Fixed:
- `<BaseModalLayout />` - support nodes as buttons' children [#5958](https://github.com/wix/wix-style-react/pull/5958)

## 9.9.0 - 2020-09-10
### Added
- `<FontUpgrade/>` - [Testkit] Add isActive function [#5936](https://github.com/wix/wix-style-react/pull/5936)
- `<RichTextInputArea/>` - add puppeteer support for enterText testkit method [#5930](https://github.com/wix/wix-style-react/pull/5930)
- `<StatisticsWidget/>` - support content alignment using the alignItems prop [#5931](https://github.com/wix/wix-style-react/pull/5931)
- `<StatisticsWidget/>` - show dashes for empty values [#5935](https://github.com/wix/wix-style-react/pull/5935)

### fixed:
- `<RadioGroup/>`, `<MessageModelLayout/>`, `<CustomModalLayout/>`, `<BaseModalLayout/>` - support using dir="rtl" instead of className="rtl" [#5941](https://github.com/wix/wix-style-react/pull/5941)
- `<PageHeader/>`- fixing issue with back button on RTL [#5956](https://github.com/wix/wix-style-react/pull/5956)

### Docs:
- `<MessageModalLayout>` - move out from the WIP list [#5944](https://github.com/wix/wix-style-react/pull/5944)
- `<BadgeSelect/>` - refactor story page and some improvements [#5957](https://github.com/wix/wix-style-react/pull/5957)

## 9.8.0 - 2020-09-07
### Added
- `<Breadcrumbs />` - show ellipsis for long texts [#5843](https://github.com/wix/wix-style-react/pull/5843)
- `<MarketingPageLayout/>` - new component [#5909](https://github.com/wix/wix-style-react/pull/5909)

### Changed
- `<StatisticsWidget/>` - update description style to support tiny size [#5933](https://github.com/wix/wix-style-react/pull/5933)

### Fixed
- `<TextButton/>` - prevent the affection of a global css - "box-sizing" [#5917](https://github.com/wix/wix-style-react/pull/5917)
- `<CounterBadge/>` - prevent the affection of a global css - "box-sizing" [#5920](https://github.com/wix/wix-style-react/pull/5920)
- `<PopoverMenu/>` - fix type definition [#5922](https://github.com/wix/wix-style-react/pull/5922)
- `<CustomModalLayout/>` - fix the cutting overflow content bug [#5932](https://github.com/wix/wix-style-react/pull/5932)

### Docs
- `<Timeline/>`, `<ToggleButton/>`, `<CheckToggle/>`- Testkits descriptions and implementation improvement [#5906](https://github.com/wix/wix-style-react/pull/5906)

## 9.7.0 - 2020-09-02
### Breaking
- `<Input/>` - Deprecated testkit functions: `clickSuffix`, `hasPrefixClass`, `hasSuffixClass`, `hasSuffixesClass` `isMenuArrowLast` [#5657](https://github.com/wix/wix-style-react/pull/5657)

## 9.6.0 - 2020-09-01
### Added
- `<CustomModalLayout/>` and `<BaseModalLayout/>` - add legacy drivers [#5907](https://github.com/wix/wix-style-react/pull/5907)
- `<FloatingNotification/>` - add fullWidth prop [#5910](https://github.com/wix/wix-style-react/pull/5910)

### Changed
- `<FilePicker/>` - implement using <FileUpload/> [#5820](https://github.com/wix/wix-style-react/pull/5820)

### Fixed
- `<Notification/>` - fix ellipsis tooltip positioning [#5900](https://github.com/wix/wix-style-react/pull/5900)

### Breaking
- `<FilePicker/>` - [testkit] - remove `getInput` function

## 9.5.0 - 2020-08-31
### Added
- `<Thumbnail/>` - add contentAlignment prop [#5860](https://github.com/wix/wix-style-react/pull/5860)
- `<RichTextInputArea/>` - add spellCheck prop [#5887](https://github.com/wix/wix-style-react/pull/5887)
- `<InputArea/>` - add the `required` attribute [#5898](https://github.com/wix/wix-style-react/pull/5898)
- `<PreviewWidget/>`- adding option for scrollable content [#5897](https://github.com/wix/wix-style-react/pull/5897)

### Changed
- `<NumberInput/>` - Disable up/down ticker on strict [#5892](https://github.com/wix/wix-style-react/pull/5892)

### Fixed
- `<StarsRatingBar/>` - [testkit] fix getSelectedRating [#5905](https://github.com/wix/wix-style-react/pull/5905)

## 9.4.0 - 2020-08-27
### Added
- `<Timeline/>` - allow passing a node instead of string only in the item label [#5883](https://github.com/wix/wix-style-react/pull/5883)
- `<FeatureList/>` - new component [#5752](https://github.com/wix/wix-style-react/pull/5752)
- `<MarketingPageLayoutContent/>` - new component [#5838](https://github.com/wix/wix-style-react/pull/5838)
- `<RichTextInputArea />` - add minHeight prop [#5869](https://github.com/wix/wix-style-react/pull/5869)

### Fixed
- `<Collapse/>` - fix the animation bug [#5882](https://github.com/wix/wix-style-react/pull/5882)
- `<DropdownLayout/>` - fix the RTL css issue & update visual tests [#5881](https://github.com/wix/wix-style-react/pull/5881)
- `<Table/>`- fix `isDisplayingNothing` implementation in driver & unidriver [#5878](https://github.com/wix/wix-style-react/pull/5878)
- `<DropdownLayout/>` - (testkit) fix click outside [#5894](https://github.com/wix/wix-style-react/pull/5894)

## 9.3.0 - 2020-08-24

### Added
- `<AnnouncementModalLayout/>` - added help button [#5852](https://github.com/wix/wix-style-react/pull/5852)
- `<CustomModalLayout/>` - added help button [#5849](https://github.com/wix/wix-style-react/pull/5849)
- `<MessageModalLayout/>` - added help button [#5853](https://github.com/wix/wix-style-react/pull/5853)

### Changed
- `<AddItem/>` - change background color of disabled state for theme `plain` [#5866](https://github.com/wix/wix-style-react/pull/5866)
- `<MultiSelectCheckbox/>`- using builders instead of manually using `<ListItemSelect/>` and `<ListItemSection/>` [#5823](https://github.com/wix/wix-style-react/pull/5823)

## 9.2.0 - 2020-08-19

### Added
- `<TestimonialList/>` - new component [#5782](https://github.com/wix/wix-style-react/pull/5782)

### Changed
- `<Sidebar/>` - update divider color [#5858](https://github.com/wix/wix-style-react/pull/5858)

### Fixed
- `<ListItemSection/>` - fix title and subheader colors [#5841](https://github.com/wix/wix-style-react/pull/5841)
- `<VariableInput/>` - fix wrong display when there is "{" before a variable [#5808](https://github.com/wix/wix-style-react/pull/5808)

### Docs
- `Cheatsheet` - create internal components family [#5850](https://github.com/wix/wix-style-react/pull/5850)
- `<TableToolbar/>`- fixing story page of `TableToolbar`[#5789](https://github.com/wix/wix-style-react/pull/5789)

## 9.1.0 - 2020-08-18

### Added
- `<TableListItem/>` - new component [#5788](https://github.com/wix/wix-style-react/pull/5788)
- `<Input/>` - add test to getDisabled [#5842](https://github.com/wix/wix-style-react/pull/5842)

### Fixed
- `<FileUpload/>` - fix story page [#5833](https://github.com/wix/wix-style-react/pull/5833)
- `<VariableInput/>` - Add public methods to its d.ts [#5847](https://github.com/wix/wix-style-react/pull/5847)
- `<Heading/>` - fix madefor [#5854](https://github.com/wix/wix-style-react/pull/5854)

### Changed
- `<MultiSelectCheckbox/>` - fix `listItemSectionBuilder` from displaying capital letters [#5822](https://github.com/wix/wix-style-react/pull/5822)

## 9.0.0 - 2020-08-12

Upgrade Stylable version to 3
