export default function initWebflow() {
  // @ts-ignore
    // eslint-disable-next-line no-undef
  $('html').attr({
    "data-wf-page": "5e8671bff6f4ab6ff43dde50",
    "data-wf-site": "5e7cda421c51bed31196d9fa"
  });
    // @ts-ignore
    // eslint-disable-next-line no-undef
    $(document).ready(function () {
        // @ts-ignore
        window.Webflow.destroy()
        // @ts-ignore
        window.Webflow.ready()
        // @ts-ignore
        window.Webflow.require('ix2').init()
        document.dispatchEvent(new Event('readystatechange'))
    });
}
