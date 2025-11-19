import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDiningW100 = (props: IIcon) => {

  return (
    <Icon
      name='DiningW100'

      short_name='Dining'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M336-216h28v-256q29-5 48.5-25.5T432-548v-142h-28v136h-40v-136h-28v136h-40v-136h-28v142q0 30 19.5 50.5T336-472v256Zm240 0h28v-248q32-11 51-43t19-77q0-52-24-86t-60-34q-36 0-60 34t-24 86q0 45 19 77t51 43v248Zm-444 84v-696h696v696H132Zm28-28h640v-640H160v640Zm0 0v-640 640Z"/>
    </Icon>
  );
};

IconMaterialDiningW100.displayName = 'OnesyIconMaterialDiningW100';

export default IconMaterialDiningW100;
