import {
    z as o
} from "./index.module.js";
var l = function(l) {
    var n, d, t, i, r = l.customization;
    this.accept = {
        backgroundColor: o(null === (n = null == r ? void 0 : r.color) || void 0 === n ? void 0 : n.acceptBtnBackground),
        textColor: o(null === (d = null == r ? void 0 : r.color) || void 0 === d ? void 0 : d.acceptBtnText)
    }, this.deny = {
        backgroundColor: o(null === (t = null == r ? void 0 : r.color) || void 0 === t ? void 0 : t.denyBtnBackground),
        textColor: o(null === (i = null == r ? void 0 : r.color) || void 0 === i ? void 0 : i.denyBtnText)
    }
};
export {
    l
};