export const Pra1 = () => {
  const calTotalFee = (num: number) => {
    const total = num * 1.1;
    return total;
  };

  const onClick = () => alert(calTotalFee(1000));

  return (
    <>
      <button onClick={onClick}>button</button>
    </>
  );
};
