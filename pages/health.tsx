export const getServerSideProps = () => {
  return {
    props: {
      textData: "example2",
    },
  };
};

export default function Health(props) {
  console.log("=== props health.tsx [11] ===", props);
  return <div>up</div>;
}
