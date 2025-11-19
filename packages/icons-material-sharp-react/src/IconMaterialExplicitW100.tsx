import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExplicitW100 = (props: IIcon) => {

  return (
    <Icon
      name='ExplicitW100'

      short_name='Explicit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M386-306h188v-28H414v-132h160v-28H414v-132h160v-28H386v348ZM172-172v-616h616v616H172Zm28-28h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
};

IconMaterialExplicitW100.displayName = 'OnesyIconMaterialExplicitW100';

export default IconMaterialExplicitW100;
