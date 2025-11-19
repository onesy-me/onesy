import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWindowW100 = (props: IIcon) => {

  return (
    <Icon
      name='WindowW100'

      short_name='Window'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-25 0-42.5-17.5T172-232v-496q0-25 17.5-42.5T232-788h496q25 0 42.5 17.5T788-728v496q0 25-17.5 42.5T728-172H232Zm262-294v266h234q14 0 23-9t9-23v-234H494Zm0-28h266v-234q0-14-9-23t-23-9H494v266Zm-28 0v-266H232q-14 0-23 9t-9 23v234h266Zm0 28H200v234q0 14 9 23t23 9h234v-266Z"/>
    </Icon>
  );
};

IconMaterialWindowW100.displayName = 'OnesyIconMaterialWindowW100';

export default IconMaterialWindowW100;
