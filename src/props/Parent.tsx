import { Child, ChildAsFC } from './Child';

const Parent = () => {
  return (
    <div>
      <ChildAsFC
        color="red"
        onClick={() => {
          console.log('clicked');
        }}
      >
        asdk
      </ChildAsFC>
    </div>
  );
};

export default Parent;
