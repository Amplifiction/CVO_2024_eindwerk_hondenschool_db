<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class StatusChangeNoti extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct($notiData)
    {
        $this->notiData = $notiData;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
                    ->subject('Status lidmaatschap gewijzigd')
                    ->line('Je aanvraag voor '.$this->notiData['discipline_name'].' met '.$this->notiData['dog_name'].' werd behandeld.')
                    ->line('De nieuwe status is: '.$this->notiData['status_name'].'.')
                    // ->action('Notification Action', url('/'))
                    // ->line('Thank you for using our application!')
                    ;
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
