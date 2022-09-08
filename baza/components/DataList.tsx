import { Center, Loader } from "@mantine/core";
import { ReactElement, useMemo } from "react";
import { ComponentType } from "react";
import { get } from "lodash";
import { FC } from "react";

const DataListLoader: FC = () => {
  return (
    <Center>
      <Loader />
    </Center>
  );
};

type DataListComponentType = <TDataItem extends { [key: string]: any }>(props: {
  data: any;
  isLoading: boolean;
  transform?: (data: any) => TDataItem[] | undefined;
  itemComponent: ComponentType<TDataItem>;
  loaderComponent?: ComponentType;
  itemKey?: string;
  itemProps?: any;
}) => ReactElement;

export const DataList: DataListComponentType = (params) => {
  const {
    data,
    isLoading,
    itemComponent: Item,
    itemKey = "id",
    transform = (data) => data,
    itemProps = {},
    loaderComponent: LoaderComponent = DataListLoader,
  } = params;

  const items = useMemo(
    () => (transform ? transform(data) : []),
    [data, transform]
  );

  if (isLoading) {
    return <LoaderComponent />;
  }

  return (
    <>
      {items.map((item: any) => (
        <Item {...item} {...itemProps} key={get(item, itemKey)} />
      ))}
    </>
  );
};
