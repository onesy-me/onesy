import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMap = (props: IIcon) => {

  return (
    <Icon
      name='Map'

      short_name='Map'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m600-120-240-84-240 93v-647l240-82 240 84 240-93v647l-240 82Zm-40-98v-468l-160-56v468l160 56Zm80 0 120-40v-474l-120 46v468Zm-440-10 120-46v-468l-120 40v474Zm440-458v468-468Zm-320-56v468-468Z"/>
    </Icon>
  );
};

IconMaterialMap.displayName = 'OnesyIconMaterialMap';

export default IconMaterialMap;
