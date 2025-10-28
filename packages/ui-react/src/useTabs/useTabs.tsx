import React from 'react';

import { is } from '@onesy/utils';

export interface IUseTab {
  tab?: any;
}

const useTabs = <Type extends unknown = string>(props?: Type | IUseTab) => {
  const [tab, setTab] = React.useState<Type>(is('string', props) ? props : (props as IUseTab)?.tab);

  const onChange = React.useCallback((item?: Type) => {
    setTab(item);
  }, []);

  const result = React.useMemo(() => {
    return {
      value: tab,
      onChange,
      setTab
    };
  }, [tab]);

  return result;
};

export default useTabs;
