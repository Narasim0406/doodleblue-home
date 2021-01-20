export default async function (ctx, inject) {
  const moduleOptions = {"accessibleIcons":true,"iconProperty":"$icon","icons":{"64":"\u002F_nuxt\u002Ficons\u002Ficon_64.ew0x20g200g.png","120":"\u002F_nuxt\u002Ficons\u002Ficon_120.ew0x20g200g.png","144":"\u002F_nuxt\u002Ficons\u002Ficon_144.ew0x20g200g.png","152":"\u002F_nuxt\u002Ficons\u002Ficon_152.ew0x20g200g.png","192":"\u002F_nuxt\u002Ficons\u002Ficon_192.ew0x20g200g.png","384":"\u002F_nuxt\u002Ficons\u002Ficon_384.ew0x20g200g.png","512":"\u002F_nuxt\u002Ficons\u002Ficon_512.ew0x20g200g.png"}}
  inject(moduleOptions.iconProperty.replace('$', ''), retrieveIcons(moduleOptions.icons))
}

const retrieveIcons = icons => size => icons[size] || ''
