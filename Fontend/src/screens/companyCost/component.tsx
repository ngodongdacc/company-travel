import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Card, Table } from "antd";
import { useAppSelector } from "../../app/hooks";
import { getCategorysTreeAction } from "./slice";


const CategoryPage = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState<any>({
    data: [],
    total: 1,
    currentPage: 1,
  });

  const header: any = [
    {
      title: "id",
      key: "id",
      dataIndex: "id",
      align: "left",
    },
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
      align: "left",
    },
    {
      title: "cost",
      key: "cost",
      dataIndex: "cost",
      align: "center",
    },
  ];
  const categoryData = useAppSelector((state) => state.screens.companyCost);

  useEffect(() => {
    dispatch(getCategorysTreeAction({}) as any);
  }, [dispatch]);

  useEffect(() => {
    if (categoryData.data) {
      setState({
        data: [categoryData.data],
      });
    }
  }, [categoryData]);

  const _onChangePage = async (page: number) => {
    setState({ ...state, currentPage: page });
    dispatch(getCategorysTreeAction({ page }) as any);
  };

  return (
    <>
      <Card
        title={
          <>
            <h3 className="text-xl">company travel</h3>
          </>
        }
        className="rounded-none"
      >
        <Table
          dataSource={state.data || []}
          columns={header}
          pagination={{
            defaultPageSize: 10,
            total: state.count,
            showSizeChanger: false,
            onChange: _onChangePage,
          }}
          rowKey={"id"}
          bordered
        />
      </Card>
    </>
  );
};

export default CategoryPage;
