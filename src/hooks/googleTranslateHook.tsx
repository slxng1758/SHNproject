import { Helmet } from "react-helmet-async";

export default function GoogleTranslate() {
  return (
    <>
      <Helmet>
        <script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          async
        ></script>
        <script type="text/javascript">
          function googleTranslateElementInit(){" "}
          {
            new google.translate.TranslateElement(
              { pageLanguage: "en" },
              "google_translate_element"
            )
          }
        </script>
      </Helmet>
    </>
  );
}
