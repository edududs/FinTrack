import { Label } from "../Label";
import { RadioGroup, RadioGroupItem } from "./RadioGroup";

interface RadioGroupDemoProps {
  optionsList?: { value: string; label: string }[];
}

const RadioGroupDemo: React.FC<RadioGroupDemoProps> = ({ optionsList = [] }) => {
  if (!optionsList.length) {
    optionsList = [
      { value: "option-one", label: "Option One" },
      { value: "option-two", label: "Option Two" },
      { value: "option-three", label: "Option Three" },
    ]
  }
  return (
    <RadioGroup defaultValue={optionsList[1]?.value || "option-two"}>
      {optionsList.map((option, index) => (
        <div key={index} className="flex items-center space-x-2">
          <RadioGroupItem value={option.value} id={option.value} />
          <Label htmlFor={option.value}>{option.label}</Label>
        </div>
      ))}
    </RadioGroup>
  );
};

export default RadioGroupDemo;
