import TypewriterComponent from "typewriter-effect";

interface TypewriterProps {
  strings: string[];
  index: number;
  completionStates: boolean[];
  onComplete: (index: number) => void;
}

const CustomTypewriter: React.FC<TypewriterProps> = ({ 
  strings, 
  index, 
  completionStates, 
  onComplete 
}) => {
  
  const shouldStart = index === 0 || completionStates[index - 1];
  
  if (!shouldStart) {
    return <span></span>;
  }

  const combinedString = strings.join(' ');

  return (
    <TypewriterComponent
      onInit={(typewriter) => {
        typewriter
          .changeDelay(50) 
          .typeString(combinedString)
          .callFunction(() => {
            onComplete(index);
          })
          .start();
      }}
    />
  );
};

export default CustomTypewriter;