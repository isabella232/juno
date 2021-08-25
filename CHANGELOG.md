
### [1.11.1](https://github.com/ringcentral/juno/compare/1.11.0...1.11.1) (2021-08-19)


### Features

* **Icon update icon:** update icon ([943d970](https://github.com/ringcentral/juno/commit/943d9702c582d42629504abcf91ab6d0602d105a))


### Bug Fixes

* **Downshift:** fix useDownshift set inner input value not emit issue ([4f1d898](https://github.com/ringcentral/juno/commit/4f1d898a167b096520a2e2e34d385029351818cd))

## [1.11.0](https://github.com/ringcentral/juno/compare/1.10.1...1.11.0) (2021-08-19)


### Features

* **Icon add dark prop to svg component:** update icon ([6adbbaf](https://github.com/ringcentral/juno/commit/6adbbafa67289297c277864cee8dd75145c0ae08))
* **Responsive:** update storybook ([fc135ff](https://github.com/ringcentral/juno/commit/fc135ff3f763d82f34924bdd683a6200f790b8c7))

### [1.10.1](https://github.com/ringcentral/juno/compare/1.10.0...1.10.1) (2021-08-19)


### Features

* **Dialog:** add Responsive dialog Example ([44e9ced](https://github.com/ringcentral/juno/commit/44e9ceda3530b9caaff792261a278bfcf8332f4a))
* **Drawer:** add multi drawer example ([fdfcf8c](https://github.com/ringcentral/juno/commit/fdfcf8c9624d22f0de118883c88e2476831b035b))
* **Hidden:** reexport Hidden component ([f997e68](https://github.com/ringcentral/juno/commit/f997e68956fc33da89d99d8f2a14036805ce1ee5))


### Bug Fixes

* **Deepmerge:** switch deepmerge to mui inner deepmerge ([a70b3f1](https://github.com/ringcentral/juno/commit/a70b3f1951a948a90915890aa052e1726a107429))
* **DialPad:** switch to useAudio ([5f4d3d7](https://github.com/ringcentral/juno/commit/5f4d3d763763f1668fd8b3cb909b1d726ce4e610))

## 1.10.0 (2021-08-19)


### ⚠ BREAKING CHANGES

* **useHiddenToFocus:** [useHiddenToFocus] rename to `useHiddenTabindex`
* **Deprecated:** [Deprecated] remove `TextField`
* **Deprecated:** [Deprecated] remove `RcFabButton`, `RcFabIconButton`, `RoundButton`
* **foundation:** [foundation] whole file structure  have a big cleanup, should switch all import to @ringcentral/juno, if there is not have that file, should move that file into your repo, that will no longer provide from juno
* **theme style:** [theme style] remove not need style method
* **lineClamp:** [lineClamp] maxHeight not more have height * 4
* **Deprecated:** [Deprecated] remove `AnnotationRightRail`
* **Deprecated:** [Deprecated] remove `LozengeButton`, `ExpansionPanel`
* **Autocomplete:** [Autocomplete] deprecated `Autocomplete`

### Features

* **Button:** change button small font-size to `caption2` ([f5bc051](https://github.com/ringcentral/juno/commit/f5bc05161e475894d27861367ec619aff8a250fd))
* **Button:** change button small padding from 12px to 16px ([fb2e3ab](https://github.com/ringcentral/juno/commit/fb2e3ab80f69e62e5f6ed293cb958c09002e2ee2))
* **Card move Jui card example into Juno:** add media card example and icon card example & remove knob in simple card example ([24b67ca](https://github.com/ringcentral/juno/commit/24b67ca90892944d6ff3650110dc05d7b65113d6))
* **CustomTheme:** support custom theme with styled-component type, and palette2 ([43ff409](https://github.com/ringcentral/juno/commit/43ff4090e049b2a9ed48cf79b5449888fa1cd186))
* **Downshift:** support `onOpen` and `onClose` and `open` ([acfa710](https://github.com/ringcentral/juno/commit/acfa710146f9aa72731f892190665c9efc565bac))
* **Downshift:** support autocomplete mode ([bca99a1](https://github.com/ringcentral/juno/commit/bca99a1b6e2007408a8d36b0da7a494407f548c6))
* **Downshift:** support custom `renderInput` ([e59a4b1](https://github.com/ringcentral/juno/commit/e59a4b173b39f49749ad0e4c6644d9efa8b26de2))
* **Downshift:** support padding with SuggestionList ([4e8d951](https://github.com/ringcentral/juno/commit/4e8d95196eb906de57f4971f7c04bdd5ea03ec74))
* **Test:** add UT for `useKeyboardMoveFocus` ([1edc754](https://github.com/ringcentral/juno/commit/1edc75419b3d4c29a7954c66c53bd602d2576d73))
* **Text support two(or more) line ellipsis:** add jsdoc and remove useless style ([dceed35](https://github.com/ringcentral/juno/commit/dceed354ee104eed9380d6f6b2b27211149191e1))
* **Text support two(or more) line ellipsis:** add line clamp support ([3541f2d](https://github.com/ringcentral/juno/commit/3541f2d2e1667cae5430a639cc0fdf85b083a6e3))
* **Theme:** fix token use ([1764e87](https://github.com/ringcentral/juno/commit/1764e87cd0e9ece53a3c59b2645e0f871b6c818b))
* **Theme:** not merge mui base theme token ([376b566](https://github.com/ringcentral/juno/commit/376b5666d6fd038a1017c25fa7404ed500a9c5b3))
* **Theme:** update scss theme ([d2b5135](https://github.com/ringcentral/juno/commit/d2b513558ec88f9830146c96d19d06a538e31778))


### Bug Fixes

* **Autocomplete:** deprecated `Autocomplete` ([b0d60ff](https://github.com/ringcentral/juno/commit/b0d60ffee7e0ed77597fce901fbe72134e1d0019))
* **DafaultTheme:** fix error default theme ([2a573c7](https://github.com/ringcentral/juno/commit/2a573c720bc6b48e3456cc9ad16868a3968f38c2))
* **Deprecated:** remove `AnnotationRightRail` ([b67b46f](https://github.com/ringcentral/juno/commit/b67b46f2d599ff0a8fcd3ce1558efea0d674ae0a))
* **Deprecated:** remove `LozengeButton`, `ExpansionPanel` ([552b875](https://github.com/ringcentral/juno/commit/552b875ed3e3e8eed00840414884755d468c745a))
* **Deprecated:** remove `RcFabButton`, `RcFabIconButton`, `RoundButton` ([866ab11](https://github.com/ringcentral/juno/commit/866ab1120bf972c02e268921d1e1967bfacca87b))
* **Deprecated:** remove `TextField` and move inner TextField outside ([8e2a874](https://github.com/ringcentral/juno/commit/8e2a874fe508a25f97732a7abb3af3c32d807c2b))
* **DialPad:** also set srcObject as null ([8296dc4](https://github.com/ringcentral/juno/commit/8296dc445554ae0da327a336ad4fab8a52d58779))
* **DialPad:** remove audio instance after destroy ([5d9de27](https://github.com/ringcentral/juno/commit/5d9de2716667f9f7d8fdda8f50f74afe7a69094c))
* **Downshift:** fix safari tab and enter in composition mode issue ([3a8202b](https://github.com/ringcentral/juno/commit/3a8202b4cda4db65e429253caa87de77a2476ea8))
* **foundation:** cleanup whole foundation ([0d8f71c](https://github.com/ringcentral/juno/commit/0d8f71ccf7a601f3f0118a75629ae2ac325f8913))
* **IconButton:** remove transition delay and easing ([9cc841b](https://github.com/ringcentral/juno/commit/9cc841b9a6cd79e2c1ac70a246805896b6754dab))
* **lineClamp:** maxHeight not more have height * 4 ([a0a54f8](https://github.com/ringcentral/juno/commit/a0a54f8fbfef0bf1e3f04998af0ac78b6a45f80a))
* **package:** remove not need `@types/smoothscroll-polyfill` ([351bd63](https://github.com/ringcentral/juno/commit/351bd638fdcde770a5d788f1157eab5310b0ff22))
* **Path:** TextField related path change ([506875e](https://github.com/ringcentral/juno/commit/506875e02eee332f193228362082a9e3b8a21068))
* **Script:** fix json to scss method ([467ae93](https://github.com/ringcentral/juno/commit/467ae93b02c9b9adfcf1b277f67cbc6c982bf980))
* **theme style:** remove not need style method ([6bf13b4](https://github.com/ringcentral/juno/commit/6bf13b45ba4185353bdd02a30a0e59e7115539c0))
* **Type:** fix rippleStyle type ([04f4d17](https://github.com/ringcentral/juno/commit/04f4d17a9301945b2bc5e2714bf01f9d5e1c1386))
* **useHiddenToFocus:** rename to `useHiddenTabindex` ([3c0624d](https://github.com/ringcentral/juno/commit/3c0624d87b7a6713815d4cf10788bfbb2aa0af1e))
* **useKeyboardMoveFocus:** fix loop when total is zero ([e8ca53e](https://github.com/ringcentral/juno/commit/e8ca53e3757e14f233107e43c1bb31c29df72aa7))

### 1.11.1 (2021-08-17)


### Features

* **project:** init project db3a050