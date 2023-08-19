import Customer from './Customer';
import Design from './Design';
function Department() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 10,
      }}
    >
      <h1 style={{ padding: 20 }}>Departments Below</h1>
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <Customer />
        <Design />
      </div>
    </div>
  );
}
export default Department;
