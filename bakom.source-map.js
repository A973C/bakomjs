{"version":3,"file":"bakom.min.js","sources":["bakom.js"],"names":["window","Bakom","textEl","originalText","bakom","this","conf","hasBackgroundClipSupport","_testEl","document","createElement","style","webkitBackgroundClip","backgroundClip","clipPathId","hasBeenDrawn","hasCssSupport","bgProp","svgs","defaults","backgroundSelector","textSelector","styleClass","dy","dx","backgroundClipSupportOnly","debug","setup","_getBackground","_getBackgroundImageProperties","_src","defaultView","getComputedStyle","element","getPropertyValue","_xy","_size","_backgroundAttachment","_backgroundRepeat","console","warn","split","slice","indexOf","lastIndexOf","pos","_getBackgroundBoxPosition","top","left","prop","src","x","parseInt","y","size","width","height","backgroundAttachment","error","bottom","getBoundingClientRect","right","querySelectorAll","_getText","_element","className","attrname","hasOwnProperty","_i","getElementById","buildSvg","_stringToNode","string","div","innerHTML","firstChild","_buildImage","_image","image","appendChild","_buildClipPath","_clipPath","clipPath","body","setCSS","backgroundPosition","backgroundImage","color","backgroundSize","unsetCSS","attr","deleteSvgs","svg","parentNode","removeChild","resetElement","init","reset","setState","textElement","undefined","backgroundElement","configure","redraw"],"mappings":"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"}