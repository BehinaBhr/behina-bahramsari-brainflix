import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";

function NotFound() {
  DocumentTitle("NotFound Page");
  return (
    <>
      <h2>Page Not Found</h2>
      <p>Please select a link from the list at the top of this page!</p>
    </>
  );
}

export default NotFound;
