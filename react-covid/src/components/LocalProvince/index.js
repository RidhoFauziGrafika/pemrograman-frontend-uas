function LocalProvince(props) {
  const { no, kota, kasus, sembuh, dirawat, meninggal } = props;
  return (
    <tbody>
      <tr>
        <td>{no}</td>
        <td>{kota}</td>
        <td>{kasus}</td>
        <td>{sembuh}</td>
        <td>{dirawat}</td>
        <td>{meninggal}</td>
      </tr>
    </tbody>
  );
}

export default LocalProvince;
