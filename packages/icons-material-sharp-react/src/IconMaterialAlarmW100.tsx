import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlarmW100 = (props: IIcon) => {

  return (
    <Icon
      name='AlarmW100'

      short_name='Alarm'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132q-64 0-120-24t-98-66q-42-42-66-98t-24-120q0-64 24-120t66-98q42-42 98-66t120-24q64 0 120 24t98 66q42 42 66 98t24 120q0 64-24 120t-66 98q-42 42-98 66t-120 24Zm0-308Zm130 150 20-20-136-136v-194h-28v206l144 144ZM240-810l20 20-130 130-20-20 130-130Zm480 0 130 130-20 20-130-130 20-20ZM480-160q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Z"/>
    </Icon>
  );
};

IconMaterialAlarmW100.displayName = 'OnesyIconMaterialAlarmW100';

export default IconMaterialAlarmW100;
