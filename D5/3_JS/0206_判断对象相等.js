function isObjectValueEqualNew(a, b) {
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);
    if (aProps.length != bProps.length) {
      return false;
    }
    for (var i = 0; i < aProps.length; i++) {
      var propName = aProps[i]
      var propA = a[propName]
      var propB = b[propName]
      if ((typeof (propA) === 'object')) {
        if (this.isObjectValueEqualNew(propA, propB)) {
          return true
        } else {
          return false
        }
      } else if (propA !== propB) {
        return false
      } else {
        //
      }
    }
    return true
  }
  let obb1 = {
    a: 1,
    b: 2,
    c: {
      d: 4,
      e: {
        f: 5,
        e: 6
      }
    }
  }
  let obb2 = {
    b: 2,
    a: 1,
    c: {
      e: {
        e: 6,
        f: 5
      },
      d: 4
    }
  }
  console.log(isObjectValueEqualNew(obb1, obb2)) // true
