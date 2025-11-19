import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewDayW100 = (props: IIcon) => {

  return (
    <Icon
      name='ViewDayW100'

      short_name='ViewDay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-224v-28h616v28H172Zm0-148v-216h616v216H172Zm28-28h560v-160H200v160Zm-28-308v-28h616v28H172Zm28 308v-160 160Z"/>
    </Icon>
  );
};

IconMaterialViewDayW100.displayName = 'OnesyIconMaterialViewDayW100';

export default IconMaterialViewDayW100;
