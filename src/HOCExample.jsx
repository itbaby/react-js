

function HOCExample(WrappedComponent) {
  return function(props) {
    const extraPropps = {
      message :'this is exteral message'
    }
    return <WrappedComponent {...props} {...extraPropps}/>
  }
}

function HOCComponent() {
  return <h1>Hello May Name is HOC</h1>
}

export default  HOCExample(HOCComponent);
