MathJax.Hub.Config({
    TeX: {
      equationNumbers: { autoNumber: "AMS" },
      Macros: {
      	AT:   "{{@}}",
      	R:    "{\\mathbb{R}}",
    	CL:   "{\\mathrm{CL}}",
        DL:   "{\\mathrm{DL}}",
        JL:   "{\\mathrm{JL}}",
	LoP:  "{\\mathrm{LP}}",
        DLP:  "{\\DL\\oplus_{\\JL}\\LoP}",
        CLP:  "{\\CL\\oplus_{\\JL}\\LoP}",
        PROVES:  "{\\,\\vdash\\,}",
	MODELS:  "{\\,\\vDash\\,}",
	AND:  "{\\,\\wedge\\,}",
	OR:  "{\\,\\vee\\,}",
        IMP:  "{\\,\\rightarrow\\,}",
        NOT:  "{\\lnot}",
        FALSE: "{\\bot}",
        JUST: ["{{#1}:{#2}}",2],
	WITH: "{\\,\\mathop{\\&}\\,}",
	BANG: "{\\,\\mathop{!}\\,}",
	DCOLON: "{\\,\\mathop{::}\\,}",
	HASH: "{\\,\\boxtimes\\,}",
        OK:   ["{\\mathrm{OK}\\left({#1}\\right)}",1],
        STAR: ["{{#1}^*}",1]
      }
    }
});
MathJax.Ajax.loadComplete("http://flengyel.github.io/mathjaxconfig.js");

