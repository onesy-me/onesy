import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWeightFilled = (props: IIcon) => {

  return (
    <Icon
      name='WeightFilled'

      short_name='Weight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-680q17 0 28.5-11.5T520-720q0-17-11.5-28.5T480-760q-17 0-28.5 11.5T440-720q0 17 11.5 28.5T480-680ZM148-120l80-560h139q-3-10-5-19.5t-2-20.5q0-50 35-85t85-35q50 0 85 35t35 85q0 11-2 20.5t-5 19.5h139l80 560H148Z"/>
    </Icon>
  );
};

IconMaterialWeightFilled.displayName = 'OnesyIconMaterialWeightFilled';

export default IconMaterialWeightFilled;
