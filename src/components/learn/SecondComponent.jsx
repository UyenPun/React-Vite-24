const ThirdComponent = () => {
  return (
    <div>
      third component
    </div>
  );
}

const SecondComponent = () => {
  return (
    <div>
      second component
    </div>
  );
}

// export default SecondComponent; // file chỉ 1 biến (default)
export {SecondComponent, ThirdComponent}; // nhiều biên
