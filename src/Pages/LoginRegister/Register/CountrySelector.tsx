import { FormHelperText } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React from "react";

const CountrySelector = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };    
  return (
    <div>
     <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>With label + helper text</FormHelperText>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Without label</FormHelperText>
    </div>
  );
};

export default CountrySelector;

// import FormControl from "@mui/material/FormControl";
// import MenuItem from "@mui/material/MenuItem";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import Select, { SelectChangeEvent } from "@mui/material/Select";
// import { Theme, useTheme } from "@mui/material/styles";
// import React from "react";

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

// const names = [
//   "Australia",
//   "Bangladesh",
//   "Colombia",
//   "India",
//   "United States",
//   "Spain",
//   "Pakistan",
//   "Nepal",
//   "Japan",
//   "Singapore",
// ];

// function getStyles(name: string, personName: readonly string[], theme: Theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

// const CountrySelector = () => {
//   const theme = useTheme();
//   const [personName, setPersonName] = React.useState<string[]>([]);

//   const handleChange = (event: SelectChangeEvent<typeof personName>) => {
//     const {
//       target: { value },
//     } = event;
//     setPersonName(
//       // On autofill we get a stringified value.
//       typeof value === "string" ? value.split(",") : value
//     );
//   };
//   return (
//     <div>
//       <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
//         <Select
//           multiple
//           displayEmpty
//           value={personName}
//           onChange={handleChange}
//           input={<OutlinedInput />}
//           renderValue={(selected) => {
//             if (selected.length === 0) {
//               return <em>Placeholder</em>;
//             }

//             return selected.join(", ");
//           }}
//           MenuProps={MenuProps}
//           inputProps={{ "aria-label": "Without label" }}
//         >
//           <MenuItem disabled value="">
//             <em>Placeholder</em>
//           </MenuItem>
//           {names.map((name) => (
//             <MenuItem
//               key={name}
//               value={name}
//               style={getStyles(name, personName, theme)}
//             >
//               {name}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//     </div>
//   );
// };

// export default CountrySelector;
