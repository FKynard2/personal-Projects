import * as React from "react";
import useAutocomplete from "@mui/base/useAutocomplete";
import { LabelB, InputB, ListboxB } from "../../../Styling/StyledComponents";

export default function UseAutocomplete({ searchFitlerA, setJobSelected }) {
    const {
        getRootProps,
        getInputLabelProps,
        getInputProps,
        getListboxProps,
        getOptionProps,
        groupedOptions,
    } = useAutocomplete({
        id: "use-autocomplete-demo",
        options: searchFitlerA,
        getOptionLabel: (option) => option.category,
        onChange: (e, value) => value && setJobSelected(value.category),
    });

    return (
        <div className="styled-div">
            <div {...getRootProps()}>
                <LabelB {...getInputLabelProps()}></LabelB>
                <InputB {...getInputProps()} placeholder="Search" />
            </div>
            {groupedOptions.length > 0 ? (
                <ListboxB {...getListboxProps()}>
                    {groupedOptions.map((option, index) => (
                        <li {...getOptionProps({ option, index })}>
                            {option.category}
                        </li>
                    ))}
                </ListboxB>
            ) : null}
        </div>
    );
}
