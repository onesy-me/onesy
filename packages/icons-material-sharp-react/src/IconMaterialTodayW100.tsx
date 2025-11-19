import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTodayW100 = (props: IIcon) => {

  return (
    <Icon
      name='TodayW100'

      short_name='Today'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-346q-33 0-56.5-23.5T280-426q0-33 23.5-56.5T360-506q33 0 56.5 23.5T440-426q0 33-23.5 56.5T360-346ZM172-132v-616h140v-92h32v92h276v-92h28v92h140v616H172Zm28-28h560v-368H200v368Zm0-396h560v-164H200v164Zm0 0v-164 164Z"/>
    </Icon>
  );
};

IconMaterialTodayW100.displayName = 'OnesyIconMaterialTodayW100';

export default IconMaterialTodayW100;
