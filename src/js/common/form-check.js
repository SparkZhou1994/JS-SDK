// export default () => {
//     return () => {
//         alert(form.id);
//         return []
//     }
// }

// 2 API Design
// 2.1 check($input, 'mobile', callback)
// 2.2 <input type="text" valid="mobile,present" name="mobile">

const rules = {
    mobile: (v) => {
        return
    },
    email: (v) => {
        return
    },
    present: (v) => {
        if (!v.trim()) {
            return {
                type: 'present',
                message: '必填'
            }
        }
    },
}

const check = (form) => {
    if (!form || form.elements) {
        return
    }
    const elements = form.elements;
    let checkResult = [];

    Array.form(elements).filter( item => {
        return item.getAttribute('valid');
    }).map(item => {
        const valids = item.getAttribute('valid').split(', ');
        const value = item.value;
        let errorArr = [];
        valids.forEach(valid => {
            if (rulese[valid]) {
                let result = relues[valid](value);
                result && errorArr.push(result);
            }
        })；

        if (errorArr.length) {
            checkResult.push({
                dom: item,
                errorArr: errorArr,
                name: item.name,
                message: errorArr[0].message,
                type: errorArr[0].type
            })
        }
    })
}

export { check }




