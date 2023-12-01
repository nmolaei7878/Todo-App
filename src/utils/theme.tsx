import { ConfigProvider } from "antd";

interface Props {
  children: React.ReactNode;
}
const Theme: React.FC<Props> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Collapse: {
            padding: 0,
            fontSize: 16,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default Theme;
