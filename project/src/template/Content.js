function Content(props) {
  return (
    <main className="flex-shrink-0 bg-light max-w-7xl mx-auto ">
      {props.children}
    </main>
  );
}

export default Content;
