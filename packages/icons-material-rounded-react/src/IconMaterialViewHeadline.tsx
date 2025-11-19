import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewHeadline = (props: IIcon) => {

  return (
    <Icon
      name='ViewHeadline'

      short_name='ViewHeadline'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M199-360q-17 0-28-11.5T160-400q0-17 11.5-28.5T200-440h561q17 0 28 11.5t11 28.5q0 17-11.5 28.5T760-360H199Zm0 160q-17 0-28-11.5T160-240q0-17 11.5-28.5T200-280h561q17 0 28 11.5t11 28.5q0 17-11.5 28.5T760-200H199Zm0-320q-17 0-28-11.5T160-560q0-17 11.5-28.5T200-600h561q17 0 28 11.5t11 28.5q0 17-11.5 28.5T760-520H199Zm0-160q-17 0-28-11.5T160-720q0-17 11.5-28.5T200-760h561q17 0 28 11.5t11 28.5q0 17-11.5 28.5T760-680H199Z"/>
    </Icon>
  );
};

IconMaterialViewHeadline.displayName = 'OnesyIconMaterialViewHeadline';

export default IconMaterialViewHeadline;
