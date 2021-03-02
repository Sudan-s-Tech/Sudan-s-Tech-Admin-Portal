import React, { useState } from "react";
// var n = 1;
export default function Test() {
    const [ar, setAr] = useState([
        {
            // title: "hello",
            // items: [
            //     {
            //         title: "s_hello",
            //     },
            // ],
        },
    ]);
    const [arr, setArr] = useState("");
    const [n, setN] = useState(1);
    var nameArr;
    function splitter(names) {
        nameArr = names.split(",");
    }
    var obj = {
        title: "",
        items: [],
    };
    function increment() {
        setN(n + 1);
    }
    function add_module() {
        console.log(obj);

        console.log(ar);
    }
    function titleHandler(main_title) {
        obj.title = main_title;
        // console.log(main_title);
    }
    async function add_submodule() {
        await splitter(arr);

        await nameArr.map((v) => {
            obj.items.push({
                title: v,
            });
        });
        setAr((oldArray) => [...oldArray, obj]);
    }

    return (
        <div>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    add_module();
                    // n = n + 1;
                }}
            >
                Add module
            </button>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    increment();
                }}
            >
                increment module
            </button>

            {[...Array(n)].map((e, i) => (
                <div>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            titleHandler(e.target[0].value);
                            add_submodule();

                            // console.log(e.target[0].value);
                        }}
                    >
                        <input key={i} placeholder="module name" />
                        <input
                            key={i}
                            placeholder="submodules"
                            onChange={(e) => {
                                e.preventDefault();
                                setArr(e.target.value);
                            }}
                        />{" "}
                        <button
                            type="submit"
                            // onClick={(e) => {
                            //     e.preventDefault();
                            // }}
                        >
                            Add sub Module
                        </button>
                    </form>
                </div>
            ))}
        </div>
    );
}
